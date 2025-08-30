# `dataCloudflareWorkerVersions` Submodule <a name="`dataCloudflareWorkerVersions` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkerVersions <a name="DataCloudflareWorkerVersions" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/worker_versions cloudflare_worker_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersions(scope Construct, id *string, config DataCloudflareWorkerVersionsConfig) DataCloudflareWorkerVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig">DataCloudflareWorkerVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig">DataCloudflareWorkerVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWorkerVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.DataCloudflareWorkerVersions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.DataCloudflareWorkerVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.DataCloudflareWorkerVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.DataCloudflareWorkerVersions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareWorkerVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareWorkerVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareWorkerVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/worker_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkerVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList">DataCloudflareWorkerVersionsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerIdInput">WorkerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerId">WorkerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.result"></a>

```go
func Result() DataCloudflareWorkerVersionsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList">DataCloudflareWorkerVersionsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `WorkerIdInput`<sup>Optional</sup> <a name="WorkerIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerIdInput"></a>

```go
func WorkerIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerId"></a>

```go
func WorkerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkerVersionsConfig <a name="DataCloudflareWorkerVersionsConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	WorkerId: *string,
	MaxItems: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.workerId">WorkerId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/worker_versions#account_id DataCloudflareWorkerVersions#account_id}

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.workerId"></a>

```go
WorkerId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/worker_versions#worker_id DataCloudflareWorkerVersions#worker_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/worker_versions#max_items DataCloudflareWorkerVersions#max_items}

---

### DataCloudflareWorkerVersionsResult <a name="DataCloudflareWorkerVersionsResult" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResult {

}
```


### DataCloudflareWorkerVersionsResultAnnotations <a name="DataCloudflareWorkerVersionsResultAnnotations" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultAnnotations {

}
```


### DataCloudflareWorkerVersionsResultAssets <a name="DataCloudflareWorkerVersionsResultAssets" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultAssets {

}
```


### DataCloudflareWorkerVersionsResultAssetsConfig <a name="DataCloudflareWorkerVersionsResultAssetsConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultAssetsConfig {

}
```


### DataCloudflareWorkerVersionsResultBindings <a name="DataCloudflareWorkerVersionsResultBindings" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultBindings {

}
```


### DataCloudflareWorkerVersionsResultBindingsOutbound <a name="DataCloudflareWorkerVersionsResultBindingsOutbound" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultBindingsOutbound {

}
```


### DataCloudflareWorkerVersionsResultBindingsOutboundWorker <a name="DataCloudflareWorkerVersionsResultBindingsOutboundWorker" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker {

}
```


### DataCloudflareWorkerVersionsResultLimits <a name="DataCloudflareWorkerVersionsResultLimits" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultLimits {

}
```


### DataCloudflareWorkerVersionsResultMigrations <a name="DataCloudflareWorkerVersionsResultMigrations" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultMigrations {

}
```


### DataCloudflareWorkerVersionsResultMigrationsRenamedClasses <a name="DataCloudflareWorkerVersionsResultMigrationsRenamedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses {

}
```


### DataCloudflareWorkerVersionsResultMigrationsSteps <a name="DataCloudflareWorkerVersionsResultMigrationsSteps" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultMigrationsSteps {

}
```


### DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses <a name="DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses {

}
```


### DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses <a name="DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses {

}
```


### DataCloudflareWorkerVersionsResultMigrationsTransferredClasses <a name="DataCloudflareWorkerVersionsResultMigrationsTransferredClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses {

}
```


### DataCloudflareWorkerVersionsResultModules <a name="DataCloudflareWorkerVersionsResultModules" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultModules {

}
```


### DataCloudflareWorkerVersionsResultPlacement <a name="DataCloudflareWorkerVersionsResultPlacement" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

&datacloudflareworkerversions.DataCloudflareWorkerVersionsResultPlacement {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkerVersionsResultAnnotationsOutputReference <a name="DataCloudflareWorkerVersionsResultAnnotationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultAnnotationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionsResultAnnotationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersMessage">WorkersMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTag">WorkersTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTriggeredBy">WorkersTriggeredBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations">DataCloudflareWorkerVersionsResultAnnotations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkersMessage`<sup>Required</sup> <a name="WorkersMessage" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersMessage"></a>

```go
func WorkersMessage() *string
```

- *Type:* *string

---

##### `WorkersTag`<sup>Required</sup> <a name="WorkersTag" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTag"></a>

```go
func WorkersTag() *string
```

- *Type:* *string

---

##### `WorkersTriggeredBy`<sup>Required</sup> <a name="WorkersTriggeredBy" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTriggeredBy"></a>

```go
func WorkersTriggeredBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultAnnotations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations">DataCloudflareWorkerVersionsResultAnnotations</a>

---


### DataCloudflareWorkerVersionsResultAssetsConfigOutputReference <a name="DataCloudflareWorkerVersionsResultAssetsConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultAssetsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionsResultAssetsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.htmlHandling">HtmlHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.notFoundHandling">NotFoundHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig">DataCloudflareWorkerVersionsResultAssetsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HtmlHandling`<sup>Required</sup> <a name="HtmlHandling" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.htmlHandling"></a>

```go
func HtmlHandling() *string
```

- *Type:* *string

---

##### `NotFoundHandling`<sup>Required</sup> <a name="NotFoundHandling" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.notFoundHandling"></a>

```go
func NotFoundHandling() *string
```

- *Type:* *string

---

##### `RunWorkerFirst`<sup>Required</sup> <a name="RunWorkerFirst" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.runWorkerFirst"></a>

```go
func RunWorkerFirst() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultAssetsConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig">DataCloudflareWorkerVersionsResultAssetsConfig</a>

---


### DataCloudflareWorkerVersionsResultAssetsOutputReference <a name="DataCloudflareWorkerVersionsResultAssetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultAssetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionsResultAssetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference">DataCloudflareWorkerVersionsResultAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.jwt">Jwt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets">DataCloudflareWorkerVersionsResultAssets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.config"></a>

```go
func Config() DataCloudflareWorkerVersionsResultAssetsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference">DataCloudflareWorkerVersionsResultAssetsConfigOutputReference</a>

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.jwt"></a>

```go
func Jwt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultAssets
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets">DataCloudflareWorkerVersionsResultAssets</a>

---


### DataCloudflareWorkerVersionsResultBindingsList <a name="DataCloudflareWorkerVersionsResultBindingsList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultBindingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionsResultBindingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionsResultBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultBindingsOutboundOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.params">Params</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound">DataCloudflareWorkerVersionsResultBindingsOutbound</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.params"></a>

```go
func Params() *[]*string
```

- *Type:* *[]*string

---

##### `Worker`<sup>Required</sup> <a name="Worker" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.worker"></a>

```go
func Worker() DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultBindingsOutbound
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound">DataCloudflareWorkerVersionsResultBindingsOutbound</a>

---


### DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker">DataCloudflareWorkerVersionsResultBindingsOutboundWorker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultBindingsOutboundWorker
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker">DataCloudflareWorkerVersionsResultBindingsOutboundWorker</a>

---


### DataCloudflareWorkerVersionsResultBindingsOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultBindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionsResultBindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.className">ClassName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.json">Json</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyBase64">KeyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyJwk">KeyJwk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.outbound">Outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.pipeline">Pipeline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.queueName">QueueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.scriptName">ScriptName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.storeId">StoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.usages">Usages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.workflowName">WorkflowName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings">DataCloudflareWorkerVersionsResultBindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.className"></a>

```go
func ClassName() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.json"></a>

```go
func Json() *string
```

- *Type:* *string

---

##### `KeyBase64`<sup>Required</sup> <a name="KeyBase64" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyBase64"></a>

```go
func KeyBase64() *string
```

- *Type:* *string

---

##### `KeyJwk`<sup>Required</sup> <a name="KeyJwk" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyJwk"></a>

```go
func KeyJwk() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `Outbound`<sup>Required</sup> <a name="Outbound" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.outbound"></a>

```go
func Outbound() DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference</a>

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.pipeline"></a>

```go
func Pipeline() *string
```

- *Type:* *string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.queueName"></a>

```go
func QueueName() *string
```

- *Type:* *string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.scriptName"></a>

```go
func ScriptName() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.storeId"></a>

```go
func StoreId() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.usages"></a>

```go
func Usages() *[]*string
```

- *Type:* *[]*string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.workflowName"></a>

```go
func WorkflowName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultBindings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings">DataCloudflareWorkerVersionsResultBindings</a>

---


### DataCloudflareWorkerVersionsResultLimitsOutputReference <a name="DataCloudflareWorkerVersionsResultLimitsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionsResultLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.cpuMs">CpuMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits">DataCloudflareWorkerVersionsResultLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuMs`<sup>Required</sup> <a name="CpuMs" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.cpuMs"></a>

```go
func CpuMs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultLimits
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits">DataCloudflareWorkerVersionsResultLimits</a>

---


### DataCloudflareWorkerVersionsResultList <a name="DataCloudflareWorkerVersionsResultList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionsResultMigrationsOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultMigrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionsResultMigrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newClasses">NewClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newTag">NewTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.oldTag">OldTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList">DataCloudflareWorkerVersionsResultMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations">DataCloudflareWorkerVersionsResultMigrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.deletedClasses"></a>

```go
func DeletedClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newClasses"></a>

```go
func NewClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newSqliteClasses"></a>

```go
func NewSqliteClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewTag`<sup>Required</sup> <a name="NewTag" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newTag"></a>

```go
func NewTag() *string
```

- *Type:* *string

---

##### `OldTag`<sup>Required</sup> <a name="OldTag" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.oldTag"></a>

```go
func OldTag() *string
```

- *Type:* *string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.renamedClasses"></a>

```go
func RenamedClasses() DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList</a>

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.steps"></a>

```go
func Steps() DataCloudflareWorkerVersionsResultMigrationsStepsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList">DataCloudflareWorkerVersionsResultMigrationsStepsList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.transferredClasses"></a>

```go
func TransferredClasses() DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultMigrations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations">DataCloudflareWorkerVersionsResultMigrations</a>

---


### DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultMigrationsRenamedClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsRenamedClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultMigrationsRenamedClasses
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsRenamedClasses</a>

---


### DataCloudflareWorkerVersionsResultMigrationsStepsList <a name="DataCloudflareWorkerVersionsResultMigrationsStepsList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultMigrationsStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionsResultMigrationsStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultMigrationsStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newClasses">NewClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps">DataCloudflareWorkerVersionsResultMigrationsSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.deletedClasses"></a>

```go
func DeletedClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newClasses"></a>

```go
func NewClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```go
func NewSqliteClasses() *[]*string
```

- *Type:* *[]*string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.renamedClasses"></a>

```go
func RenamedClasses() DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.transferredClasses"></a>

```go
func TransferredClasses() DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultMigrationsSteps
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps">DataCloudflareWorkerVersionsResultMigrationsSteps</a>

---


### DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses</a>

---


### DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```go
func FromScript() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses</a>

---


### DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultMigrationsTransferredClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsTransferredClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```go
func FromScript() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultMigrationsTransferredClasses
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsTransferredClasses</a>

---


### DataCloudflareWorkerVersionsResultModulesList <a name="DataCloudflareWorkerVersionsResultModulesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultModulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkerVersionsResultModulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkerVersionsResultModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkerVersionsResultModulesOutputReference <a name="DataCloudflareWorkerVersionsResultModulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultModulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionsResultModulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentBase64">ContentBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules">DataCloudflareWorkerVersionsResultModules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentBase64"></a>

```go
func ContentBase64() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultModules
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules">DataCloudflareWorkerVersionsResultModules</a>

---


### DataCloudflareWorkerVersionsResultOutputReference <a name="DataCloudflareWorkerVersionsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkerVersionsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.annotations">Annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference">DataCloudflareWorkerVersionsResultAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference">DataCloudflareWorkerVersionsResultAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.bindings">Bindings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList">DataCloudflareWorkerVersionsResultBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityDate">CompatibilityDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference">DataCloudflareWorkerVersionsResultLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.mainModule">MainModule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.migrations">Migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference">DataCloudflareWorkerVersionsResultMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.modules">Modules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList">DataCloudflareWorkerVersionsResultModulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference">DataCloudflareWorkerVersionsResultPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.usageModel">UsageModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult">DataCloudflareWorkerVersionsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.annotations"></a>

```go
func Annotations() DataCloudflareWorkerVersionsResultAnnotationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference">DataCloudflareWorkerVersionsResultAnnotationsOutputReference</a>

---

##### `Assets`<sup>Required</sup> <a name="Assets" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.assets"></a>

```go
func Assets() DataCloudflareWorkerVersionsResultAssetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference">DataCloudflareWorkerVersionsResultAssetsOutputReference</a>

---

##### `Bindings`<sup>Required</sup> <a name="Bindings" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.bindings"></a>

```go
func Bindings() DataCloudflareWorkerVersionsResultBindingsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList">DataCloudflareWorkerVersionsResultBindingsList</a>

---

##### `CompatibilityDate`<sup>Required</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityDate"></a>

```go
func CompatibilityDate() *string
```

- *Type:* *string

---

##### `CompatibilityFlags`<sup>Required</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityFlags"></a>

```go
func CompatibilityFlags() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.limits"></a>

```go
func Limits() DataCloudflareWorkerVersionsResultLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference">DataCloudflareWorkerVersionsResultLimitsOutputReference</a>

---

##### `MainModule`<sup>Required</sup> <a name="MainModule" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.mainModule"></a>

```go
func MainModule() *string
```

- *Type:* *string

---

##### `Migrations`<sup>Required</sup> <a name="Migrations" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.migrations"></a>

```go
func Migrations() DataCloudflareWorkerVersionsResultMigrationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference">DataCloudflareWorkerVersionsResultMigrationsOutputReference</a>

---

##### `Modules`<sup>Required</sup> <a name="Modules" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.modules"></a>

```go
func Modules() DataCloudflareWorkerVersionsResultModulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList">DataCloudflareWorkerVersionsResultModulesList</a>

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.placement"></a>

```go
func Placement() DataCloudflareWorkerVersionsResultPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference">DataCloudflareWorkerVersionsResultPlacementOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.usageModel"></a>

```go
func UsageModel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult">DataCloudflareWorkerVersionsResult</a>

---


### DataCloudflareWorkerVersionsResultPlacementOutputReference <a name="DataCloudflareWorkerVersionsResultPlacementOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareworkerversions"

datacloudflareworkerversions.NewDataCloudflareWorkerVersionsResultPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkerVersionsResultPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement">DataCloudflareWorkerVersionsResultPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkerVersionsResultPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement">DataCloudflareWorkerVersionsResultPlacement</a>

---



