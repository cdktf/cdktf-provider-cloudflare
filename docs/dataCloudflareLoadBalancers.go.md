# `dataCloudflareLoadBalancers` Submodule <a name="`dataCloudflareLoadBalancers` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLoadBalancers <a name="DataCloudflareLoadBalancers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers cloudflare_load_balancers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancers(scope Construct, id *string, config DataCloudflareLoadBalancersConfig) DataCloudflareLoadBalancers
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig">DataCloudflareLoadBalancersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig">DataCloudflareLoadBalancersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareLoadBalancers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.DataCloudflareLoadBalancers_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.DataCloudflareLoadBalancers_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.DataCloudflareLoadBalancers_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.DataCloudflareLoadBalancers_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareLoadBalancers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareLoadBalancers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareLoadBalancers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareLoadBalancers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList">DataCloudflareLoadBalancersResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.result"></a>

```go
func Result() DataCloudflareLoadBalancersResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList">DataCloudflareLoadBalancersResultList</a>

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLoadBalancersConfig <a name="DataCloudflareLoadBalancersConfig" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	MaxItems: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#zone_id DataCloudflareLoadBalancers#zone_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#zone_id DataCloudflareLoadBalancers#zone_id}.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#max_items DataCloudflareLoadBalancers#max_items}

---

### DataCloudflareLoadBalancersResult <a name="DataCloudflareLoadBalancersResult" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersResult {
	CountryPools: interface{},
	PopPools: interface{},
	RegionPools: interface{},
	SessionAffinityTtl: *f64,
	SteeringPolicy: *string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.countryPools">CountryPools</a></code> | <code>interface{}</code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.popPools">PopPools</a></code> | <code>interface{}</code> | (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.regionPools">RegionPools</a></code> | <code>interface{}</code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.sessionAffinityTtl">SessionAffinityTtl</a></code> | <code>*f64</code> | Time, in seconds, until a client's session expires after being created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.steeringPolicy">SteeringPolicy</a></code> | <code>*string</code> | Steering Policy for this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.ttl">Ttl</a></code> | <code>*f64</code> | Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. |

---

##### `CountryPools`<sup>Optional</sup> <a name="CountryPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.countryPools"></a>

```go
CountryPools interface{}
```

- *Type:* interface{}

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#country_pools DataCloudflareLoadBalancers#country_pools}

---

##### `PopPools`<sup>Optional</sup> <a name="PopPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.popPools"></a>

```go
PopPools interface{}
```

- *Type:* interface{}

(Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#pop_pools DataCloudflareLoadBalancers#pop_pools}

---

##### `RegionPools`<sup>Optional</sup> <a name="RegionPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.regionPools"></a>

```go
RegionPools interface{}
```

- *Type:* interface{}

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#region_pools DataCloudflareLoadBalancers#region_pools}

---

##### `SessionAffinityTtl`<sup>Optional</sup> <a name="SessionAffinityTtl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.sessionAffinityTtl"></a>

```go
SessionAffinityTtl *f64
```

- *Type:* *f64

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are:

* `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800].
* `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#session_affinity_ttl DataCloudflareLoadBalancers#session_affinity_ttl}

---

##### `SteeringPolicy`<sup>Optional</sup> <a name="SteeringPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.steeringPolicy"></a>

```go
SteeringPolicy *string
```

- *Type:* *string

Steering Policy for this load balancer.

* `"off"`: Use `default_pools`.
* `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
* `"random"`: Select a pool randomly.
* `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
* `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
* `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
* `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
  Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#steering_policy DataCloudflareLoadBalancers#steering_policy}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#ttl DataCloudflareLoadBalancers#ttl}

---

### DataCloudflareLoadBalancersResultAdaptiveRouting <a name="DataCloudflareLoadBalancersResultAdaptiveRouting" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersResultAdaptiveRouting {

}
```


### DataCloudflareLoadBalancersResultLocationStrategy <a name="DataCloudflareLoadBalancersResultLocationStrategy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersResultLocationStrategy {

}
```


### DataCloudflareLoadBalancersResultRandomSteering <a name="DataCloudflareLoadBalancersResultRandomSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersResultRandomSteering {

}
```


### DataCloudflareLoadBalancersResultRules <a name="DataCloudflareLoadBalancersResultRules" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersResultRules {

}
```


### DataCloudflareLoadBalancersResultRulesFixedResponse <a name="DataCloudflareLoadBalancersResultRulesFixedResponse" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersResultRulesFixedResponse {

}
```


### DataCloudflareLoadBalancersResultRulesOverrides <a name="DataCloudflareLoadBalancersResultRulesOverrides" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersResultRulesOverrides {
	CountryPools: interface{},
	PopPools: interface{},
	RegionPools: interface{},
	SessionAffinityTtl: *f64,
	SteeringPolicy: *string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.countryPools">CountryPools</a></code> | <code>interface{}</code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.popPools">PopPools</a></code> | <code>interface{}</code> | (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.regionPools">RegionPools</a></code> | <code>interface{}</code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.sessionAffinityTtl">SessionAffinityTtl</a></code> | <code>*f64</code> | Time, in seconds, until a client's session expires after being created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.steeringPolicy">SteeringPolicy</a></code> | <code>*string</code> | Steering Policy for this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.ttl">Ttl</a></code> | <code>*f64</code> | Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. |

---

##### `CountryPools`<sup>Optional</sup> <a name="CountryPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.countryPools"></a>

```go
CountryPools interface{}
```

- *Type:* interface{}

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#country_pools DataCloudflareLoadBalancers#country_pools}

---

##### `PopPools`<sup>Optional</sup> <a name="PopPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.popPools"></a>

```go
PopPools interface{}
```

- *Type:* interface{}

(Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#pop_pools DataCloudflareLoadBalancers#pop_pools}

---

##### `RegionPools`<sup>Optional</sup> <a name="RegionPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.regionPools"></a>

```go
RegionPools interface{}
```

- *Type:* interface{}

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#region_pools DataCloudflareLoadBalancers#region_pools}

---

##### `SessionAffinityTtl`<sup>Optional</sup> <a name="SessionAffinityTtl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.sessionAffinityTtl"></a>

```go
SessionAffinityTtl *f64
```

- *Type:* *f64

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are:

* `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800].
* `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#session_affinity_ttl DataCloudflareLoadBalancers#session_affinity_ttl}

---

##### `SteeringPolicy`<sup>Optional</sup> <a name="SteeringPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.steeringPolicy"></a>

```go
SteeringPolicy *string
```

- *Type:* *string

Steering Policy for this load balancer.

* `"off"`: Use `default_pools`.
* `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
* `"random"`: Select a pool randomly.
* `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
* `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
* `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
* `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
  Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#steering_policy DataCloudflareLoadBalancers#steering_policy}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#ttl DataCloudflareLoadBalancers#ttl}

---

### DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting <a name="DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting {

}
```


### DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy <a name="DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy {

}
```


### DataCloudflareLoadBalancersResultRulesOverridesRandomSteering <a name="DataCloudflareLoadBalancersResultRulesOverridesRandomSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering {

}
```


### DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes <a name="DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes {
	DrainDuration: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes.property.drainDuration">DrainDuration</a></code> | <code>*f64</code> | Configures the drain duration in seconds. |

---

##### `DrainDuration`<sup>Optional</sup> <a name="DrainDuration" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes.property.drainDuration"></a>

```go
DrainDuration *f64
```

- *Type:* *f64

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#drain_duration DataCloudflareLoadBalancers#drain_duration}

---

### DataCloudflareLoadBalancersResultSessionAffinityAttributes <a name="DataCloudflareLoadBalancersResultSessionAffinityAttributes" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

&datacloudflareloadbalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes {
	DrainDuration: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes.property.drainDuration">DrainDuration</a></code> | <code>*f64</code> | Configures the drain duration in seconds. |

---

##### `DrainDuration`<sup>Optional</sup> <a name="DrainDuration" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes.property.drainDuration"></a>

```go
DrainDuration *f64
```

- *Type:* *f64

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancers#drain_duration DataCloudflareLoadBalancers#drain_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference <a name="DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.failoverAcrossPools">FailoverAcrossPools</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting">DataCloudflareLoadBalancersResultAdaptiveRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailoverAcrossPools`<sup>Required</sup> <a name="FailoverAcrossPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```go
func FailoverAcrossPools() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancersResultAdaptiveRouting
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting">DataCloudflareLoadBalancersResultAdaptiveRouting</a>

---


### DataCloudflareLoadBalancersResultList <a name="DataCloudflareLoadBalancersResultList" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareLoadBalancersResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.get"></a>

```go
func Get(index *f64) DataCloudflareLoadBalancersResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareLoadBalancersResultLocationStrategyOutputReference <a name="DataCloudflareLoadBalancersResultLocationStrategyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultLocationStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancersResultLocationStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.preferEcs">PreferEcs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy">DataCloudflareLoadBalancersResultLocationStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `PreferEcs`<sup>Required</sup> <a name="PreferEcs" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.preferEcs"></a>

```go
func PreferEcs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancersResultLocationStrategy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy">DataCloudflareLoadBalancersResultLocationStrategy</a>

---


### DataCloudflareLoadBalancersResultOutputReference <a name="DataCloudflareLoadBalancersResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareLoadBalancersResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetCountryPools">ResetCountryPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetPopPools">ResetPopPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetRegionPools">ResetRegionPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetSessionAffinityTtl">ResetSessionAffinityTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetSteeringPolicy">ResetSteeringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountryPools` <a name="ResetCountryPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetCountryPools"></a>

```go
func ResetCountryPools()
```

##### `ResetPopPools` <a name="ResetPopPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetPopPools"></a>

```go
func ResetPopPools()
```

##### `ResetRegionPools` <a name="ResetRegionPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetRegionPools"></a>

```go
func ResetRegionPools()
```

##### `ResetSessionAffinityTtl` <a name="ResetSessionAffinityTtl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetSessionAffinityTtl"></a>

```go
func ResetSessionAffinityTtl()
```

##### `ResetSteeringPolicy` <a name="ResetSteeringPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetSteeringPolicy"></a>

```go
func ResetSteeringPolicy()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.adaptiveRouting">AdaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference">DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.defaultPools">DefaultPools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.fallbackPool">FallbackPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.locationStrategy">LocationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference">DataCloudflareLoadBalancersResultLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.networks">Networks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.proxied">Proxied</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.randomSteering">RandomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference">DataCloudflareLoadBalancersResultRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList">DataCloudflareLoadBalancersResultRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityAttributes">SessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference">DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.countryPoolsInput">CountryPoolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.popPoolsInput">PopPoolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.regionPoolsInput">RegionPoolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityTtlInput">SessionAffinityTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.steeringPolicyInput">SteeringPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.countryPools">CountryPools</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.popPools">PopPools</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.regionPools">RegionPools</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityTtl">SessionAffinityTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.steeringPolicy">SteeringPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult">DataCloudflareLoadBalancersResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdaptiveRouting`<sup>Required</sup> <a name="AdaptiveRouting" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.adaptiveRouting"></a>

```go
func AdaptiveRouting() DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference">DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DefaultPools`<sup>Required</sup> <a name="DefaultPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.defaultPools"></a>

```go
func DefaultPools() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FallbackPool`<sup>Required</sup> <a name="FallbackPool" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.fallbackPool"></a>

```go
func FallbackPool() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationStrategy`<sup>Required</sup> <a name="LocationStrategy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.locationStrategy"></a>

```go
func LocationStrategy() DataCloudflareLoadBalancersResultLocationStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference">DataCloudflareLoadBalancersResultLocationStrategyOutputReference</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.networks"></a>

```go
func Networks() *[]*string
```

- *Type:* *[]*string

---

##### `Proxied`<sup>Required</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.proxied"></a>

```go
func Proxied() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RandomSteering`<sup>Required</sup> <a name="RandomSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.randomSteering"></a>

```go
func RandomSteering() DataCloudflareLoadBalancersResultRandomSteeringOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference">DataCloudflareLoadBalancersResultRandomSteeringOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.rules"></a>

```go
func Rules() DataCloudflareLoadBalancersResultRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList">DataCloudflareLoadBalancersResultRulesList</a>

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinity"></a>

```go
func SessionAffinity() *string
```

- *Type:* *string

---

##### `SessionAffinityAttributes`<sup>Required</sup> <a name="SessionAffinityAttributes" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityAttributes"></a>

```go
func SessionAffinityAttributes() DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference">DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference</a>

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

##### `CountryPoolsInput`<sup>Optional</sup> <a name="CountryPoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.countryPoolsInput"></a>

```go
func CountryPoolsInput() interface{}
```

- *Type:* interface{}

---

##### `PopPoolsInput`<sup>Optional</sup> <a name="PopPoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.popPoolsInput"></a>

```go
func PopPoolsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionPoolsInput`<sup>Optional</sup> <a name="RegionPoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.regionPoolsInput"></a>

```go
func RegionPoolsInput() interface{}
```

- *Type:* interface{}

---

##### `SessionAffinityTtlInput`<sup>Optional</sup> <a name="SessionAffinityTtlInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityTtlInput"></a>

```go
func SessionAffinityTtlInput() *f64
```

- *Type:* *f64

---

##### `SteeringPolicyInput`<sup>Optional</sup> <a name="SteeringPolicyInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.steeringPolicyInput"></a>

```go
func SteeringPolicyInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `CountryPools`<sup>Required</sup> <a name="CountryPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.countryPools"></a>

```go
func CountryPools() interface{}
```

- *Type:* interface{}

---

##### `PopPools`<sup>Required</sup> <a name="PopPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.popPools"></a>

```go
func PopPools() interface{}
```

- *Type:* interface{}

---

##### `RegionPools`<sup>Required</sup> <a name="RegionPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.regionPools"></a>

```go
func RegionPools() interface{}
```

- *Type:* interface{}

---

##### `SessionAffinityTtl`<sup>Required</sup> <a name="SessionAffinityTtl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityTtl"></a>

```go
func SessionAffinityTtl() *f64
```

- *Type:* *f64

---

##### `SteeringPolicy`<sup>Required</sup> <a name="SteeringPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.steeringPolicy"></a>

```go
func SteeringPolicy() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancersResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult">DataCloudflareLoadBalancersResult</a>

---


### DataCloudflareLoadBalancersResultRandomSteeringOutputReference <a name="DataCloudflareLoadBalancersResultRandomSteeringOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultRandomSteeringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancersResultRandomSteeringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.defaultWeight">DefaultWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.poolWeights">PoolWeights</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering">DataCloudflareLoadBalancersResultRandomSteering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultWeight`<sup>Required</sup> <a name="DefaultWeight" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.defaultWeight"></a>

```go
func DefaultWeight() *f64
```

- *Type:* *f64

---

##### `PoolWeights`<sup>Required</sup> <a name="PoolWeights" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.poolWeights"></a>

```go
func PoolWeights() NumberMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancersResultRandomSteering
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering">DataCloudflareLoadBalancersResultRandomSteering</a>

---


### DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference <a name="DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultRulesFixedResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.messageBody">MessageBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse">DataCloudflareLoadBalancersResultRulesFixedResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.messageBody"></a>

```go
func MessageBody() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancersResultRulesFixedResponse
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse">DataCloudflareLoadBalancersResultRulesFixedResponse</a>

---


### DataCloudflareLoadBalancersResultRulesList <a name="DataCloudflareLoadBalancersResultRulesList" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareLoadBalancersResultRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.get"></a>

```go
func Get(index *f64) DataCloudflareLoadBalancersResultRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareLoadBalancersResultRulesOutputReference <a name="DataCloudflareLoadBalancersResultRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareLoadBalancersResultRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.disabled">Disabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference">DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference">DataCloudflareLoadBalancersResultRulesOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.terminates">Terminates</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules">DataCloudflareLoadBalancersResultRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FixedResponse`<sup>Required</sup> <a name="FixedResponse" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.fixedResponse"></a>

```go
func FixedResponse() DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference">DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.overrides"></a>

```go
func Overrides() DataCloudflareLoadBalancersResultRulesOverridesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference">DataCloudflareLoadBalancersResultRulesOverridesOutputReference</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Terminates`<sup>Required</sup> <a name="Terminates" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.terminates"></a>

```go
func Terminates() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancersResultRules
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules">DataCloudflareLoadBalancersResultRules</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools">FailoverAcrossPools</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting">DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailoverAcrossPools`<sup>Required</sup> <a name="FailoverAcrossPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```go
func FailoverAcrossPools() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting">DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.preferEcs">PreferEcs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy">DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `PreferEcs`<sup>Required</sup> <a name="PreferEcs" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.preferEcs"></a>

```go
func PreferEcs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy">DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultRulesOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancersResultRulesOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetCountryPools">ResetCountryPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetPopPools">ResetPopPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetRegionPools">ResetRegionPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetSessionAffinityTtl">ResetSessionAffinityTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetSteeringPolicy">ResetSteeringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountryPools` <a name="ResetCountryPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetCountryPools"></a>

```go
func ResetCountryPools()
```

##### `ResetPopPools` <a name="ResetPopPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetPopPools"></a>

```go
func ResetPopPools()
```

##### `ResetRegionPools` <a name="ResetRegionPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetRegionPools"></a>

```go
func ResetRegionPools()
```

##### `ResetSessionAffinityTtl` <a name="ResetSessionAffinityTtl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetSessionAffinityTtl"></a>

```go
func ResetSessionAffinityTtl()
```

##### `ResetSteeringPolicy` <a name="ResetSteeringPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetSteeringPolicy"></a>

```go
func ResetSteeringPolicy()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.adaptiveRouting">AdaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference">DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.defaultPools">DefaultPools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.fallbackPool">FallbackPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.locationStrategy">LocationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference">DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.randomSteering">RandomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference">DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityAttributes">SessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference">DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.countryPoolsInput">CountryPoolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.popPoolsInput">PopPoolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.regionPoolsInput">RegionPoolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityTtlInput">SessionAffinityTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.steeringPolicyInput">SteeringPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.countryPools">CountryPools</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.popPools">PopPools</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.regionPools">RegionPools</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityTtl">SessionAffinityTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.steeringPolicy">SteeringPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides">DataCloudflareLoadBalancersResultRulesOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdaptiveRouting`<sup>Required</sup> <a name="AdaptiveRouting" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.adaptiveRouting"></a>

```go
func AdaptiveRouting() DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference">DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference</a>

---

##### `DefaultPools`<sup>Required</sup> <a name="DefaultPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.defaultPools"></a>

```go
func DefaultPools() *[]*string
```

- *Type:* *[]*string

---

##### `FallbackPool`<sup>Required</sup> <a name="FallbackPool" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.fallbackPool"></a>

```go
func FallbackPool() *string
```

- *Type:* *string

---

##### `LocationStrategy`<sup>Required</sup> <a name="LocationStrategy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.locationStrategy"></a>

```go
func LocationStrategy() DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference">DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference</a>

---

##### `RandomSteering`<sup>Required</sup> <a name="RandomSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.randomSteering"></a>

```go
func RandomSteering() DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference">DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference</a>

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinity"></a>

```go
func SessionAffinity() *string
```

- *Type:* *string

---

##### `SessionAffinityAttributes`<sup>Required</sup> <a name="SessionAffinityAttributes" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityAttributes"></a>

```go
func SessionAffinityAttributes() DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference">DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference</a>

---

##### `CountryPoolsInput`<sup>Optional</sup> <a name="CountryPoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.countryPoolsInput"></a>

```go
func CountryPoolsInput() interface{}
```

- *Type:* interface{}

---

##### `PopPoolsInput`<sup>Optional</sup> <a name="PopPoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.popPoolsInput"></a>

```go
func PopPoolsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionPoolsInput`<sup>Optional</sup> <a name="RegionPoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.regionPoolsInput"></a>

```go
func RegionPoolsInput() interface{}
```

- *Type:* interface{}

---

##### `SessionAffinityTtlInput`<sup>Optional</sup> <a name="SessionAffinityTtlInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityTtlInput"></a>

```go
func SessionAffinityTtlInput() *f64
```

- *Type:* *f64

---

##### `SteeringPolicyInput`<sup>Optional</sup> <a name="SteeringPolicyInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.steeringPolicyInput"></a>

```go
func SteeringPolicyInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `CountryPools`<sup>Required</sup> <a name="CountryPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.countryPools"></a>

```go
func CountryPools() interface{}
```

- *Type:* interface{}

---

##### `PopPools`<sup>Required</sup> <a name="PopPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.popPools"></a>

```go
func PopPools() interface{}
```

- *Type:* interface{}

---

##### `RegionPools`<sup>Required</sup> <a name="RegionPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.regionPools"></a>

```go
func RegionPools() interface{}
```

- *Type:* interface{}

---

##### `SessionAffinityTtl`<sup>Required</sup> <a name="SessionAffinityTtl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityTtl"></a>

```go
func SessionAffinityTtl() *f64
```

- *Type:* *f64

---

##### `SteeringPolicy`<sup>Required</sup> <a name="SteeringPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.steeringPolicy"></a>

```go
func SteeringPolicy() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancersResultRulesOverrides
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides">DataCloudflareLoadBalancersResultRulesOverrides</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.defaultWeight">DefaultWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.poolWeights">PoolWeights</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering">DataCloudflareLoadBalancersResultRulesOverridesRandomSteering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultWeight`<sup>Required</sup> <a name="DefaultWeight" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.defaultWeight"></a>

```go
func DefaultWeight() *f64
```

- *Type:* *f64

---

##### `PoolWeights`<sup>Required</sup> <a name="PoolWeights" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.poolWeights"></a>

```go
func PoolWeights() NumberMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancersResultRulesOverridesRandomSteering
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering">DataCloudflareLoadBalancersResultRulesOverridesRandomSteering</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration">ResetDrainDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDrainDuration` <a name="ResetDrainDuration" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```go
func ResetDrainDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.headers">Headers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders">RequireAllHeaders</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.samesite">Samesite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.secure">Secure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">ZeroDowntimeFailover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput">DrainDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration">DrainDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes">DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.headers"></a>

```go
func Headers() *[]*string
```

- *Type:* *[]*string

---

##### `RequireAllHeaders`<sup>Required</sup> <a name="RequireAllHeaders" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```go
func RequireAllHeaders() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Samesite`<sup>Required</sup> <a name="Samesite" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.samesite"></a>

```go
func Samesite() *string
```

- *Type:* *string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.secure"></a>

```go
func Secure() *string
```

- *Type:* *string

---

##### `ZeroDowntimeFailover`<sup>Required</sup> <a name="ZeroDowntimeFailover" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```go
func ZeroDowntimeFailover() *string
```

- *Type:* *string

---

##### `DrainDurationInput`<sup>Optional</sup> <a name="DrainDurationInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```go
func DrainDurationInput() *f64
```

- *Type:* *f64

---

##### `DrainDuration`<sup>Required</sup> <a name="DrainDuration" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```go
func DrainDuration() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes">DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes</a>

---


### DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference <a name="DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancers"

datacloudflareloadbalancers.NewDataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resetDrainDuration">ResetDrainDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDrainDuration` <a name="ResetDrainDuration" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```go
func ResetDrainDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.headers">Headers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.requireAllHeaders">RequireAllHeaders</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.samesite">Samesite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.secure">Secure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">ZeroDowntimeFailover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.drainDurationInput">DrainDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.drainDuration">DrainDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes">DataCloudflareLoadBalancersResultSessionAffinityAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.headers"></a>

```go
func Headers() *[]*string
```

- *Type:* *[]*string

---

##### `RequireAllHeaders`<sup>Required</sup> <a name="RequireAllHeaders" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```go
func RequireAllHeaders() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Samesite`<sup>Required</sup> <a name="Samesite" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.samesite"></a>

```go
func Samesite() *string
```

- *Type:* *string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.secure"></a>

```go
func Secure() *string
```

- *Type:* *string

---

##### `ZeroDowntimeFailover`<sup>Required</sup> <a name="ZeroDowntimeFailover" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```go
func ZeroDowntimeFailover() *string
```

- *Type:* *string

---

##### `DrainDurationInput`<sup>Optional</sup> <a name="DrainDurationInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```go
func DrainDurationInput() *f64
```

- *Type:* *f64

---

##### `DrainDuration`<sup>Required</sup> <a name="DrainDuration" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```go
func DrainDuration() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancersResultSessionAffinityAttributes
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes">DataCloudflareLoadBalancersResultSessionAffinityAttributes</a>

---



