# `data_cloudflare_load_balancer_pools`

Refer to the Terraform Registory for docs: [`data_cloudflare_load_balancer_pools`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/data-sources/load_balancer_pools).

# `dataCloudflareLoadBalancerPools` Submodule <a name="`dataCloudflareLoadBalancerPools` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLoadBalancerPools <a name="DataCloudflareLoadBalancerPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/data-sources/load_balancer_pools cloudflare_load_balancer_pools}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.NewDataCloudflareLoadBalancerPools(scope Construct, id *string, config DataCloudflareLoadBalancerPoolsConfig) DataCloudflareLoadBalancerPools
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig">DataCloudflareLoadBalancerPoolsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig">DataCloudflareLoadBalancerPoolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.putPools">PutPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetPools">ResetPools</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.putFilter"></a>

```go
func PutFilter(value DataCloudflareLoadBalancerPoolsFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilter">DataCloudflareLoadBalancerPoolsFilter</a>

---

##### `PutPools` <a name="PutPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.putPools"></a>

```go
func PutPools(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.putPools.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetId"></a>

```go
func ResetId()
```

##### `ResetPools` <a name="ResetPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetPools"></a>

```go
func ResetPools()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.DataCloudflareLoadBalancerPools_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.DataCloudflareLoadBalancerPools_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.DataCloudflareLoadBalancerPools_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference">DataCloudflareLoadBalancerPoolsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.pools">Pools</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList">DataCloudflareLoadBalancerPoolsPoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilter">DataCloudflareLoadBalancerPoolsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.poolsInput">PoolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.filter"></a>

```go
func Filter() DataCloudflareLoadBalancerPoolsFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference">DataCloudflareLoadBalancerPoolsFilterOutputReference</a>

---

##### `Pools`<sup>Required</sup> <a name="Pools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.pools"></a>

```go
func Pools() DataCloudflareLoadBalancerPoolsPoolsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList">DataCloudflareLoadBalancerPoolsPoolsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.filterInput"></a>

```go
func FilterInput() DataCloudflareLoadBalancerPoolsFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilter">DataCloudflareLoadBalancerPoolsFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PoolsInput`<sup>Optional</sup> <a name="PoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.poolsInput"></a>

```go
func PoolsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLoadBalancerPoolsConfig <a name="DataCloudflareLoadBalancerPoolsConfig" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

&datacloudflareloadbalancerpools.DataCloudflareLoadBalancerPoolsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilter,
	Id: *string,
	Pools: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the datasource lookups. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilter">DataCloudflareLoadBalancerPoolsFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/data-sources/load_balancer_pools#id DataCloudflareLoadBalancerPools#id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.pools">Pools</a></code> | <code>interface{}</code> | pools block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the datasource lookups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/data-sources/load_balancer_pools#account_id DataCloudflareLoadBalancerPools#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.filter"></a>

```go
Filter DataCloudflareLoadBalancerPoolsFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilter">DataCloudflareLoadBalancerPoolsFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/data-sources/load_balancer_pools#filter DataCloudflareLoadBalancerPools#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/data-sources/load_balancer_pools#id DataCloudflareLoadBalancerPools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Pools`<sup>Optional</sup> <a name="Pools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.pools"></a>

```go
Pools interface{}
```

- *Type:* interface{}

pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/data-sources/load_balancer_pools#pools DataCloudflareLoadBalancerPools#pools}

---

### DataCloudflareLoadBalancerPoolsFilter <a name="DataCloudflareLoadBalancerPoolsFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

&datacloudflareloadbalancerpools.DataCloudflareLoadBalancerPoolsFilter {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilter.property.name">Name</a></code> | <code>*string</code> | A regular expression matching the name of the Load Balancer pool to lookup. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

A regular expression matching the name of the Load Balancer pool to lookup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/data-sources/load_balancer_pools#name DataCloudflareLoadBalancerPools#name}

---

### DataCloudflareLoadBalancerPoolsPools <a name="DataCloudflareLoadBalancerPoolsPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPools.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

&datacloudflareloadbalancerpools.DataCloudflareLoadBalancerPoolsPools {

}
```


### DataCloudflareLoadBalancerPoolsPoolsLoadShedding <a name="DataCloudflareLoadBalancerPoolsPoolsLoadShedding" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadShedding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadShedding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

&datacloudflareloadbalancerpools.DataCloudflareLoadBalancerPoolsPoolsLoadShedding {

}
```


### DataCloudflareLoadBalancerPoolsPoolsOrigins <a name="DataCloudflareLoadBalancerPoolsPoolsOrigins" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOrigins.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

&datacloudflareloadbalancerpools.DataCloudflareLoadBalancerPoolsPoolsOrigins {

}
```


### DataCloudflareLoadBalancerPoolsPoolsOriginsHeader <a name="DataCloudflareLoadBalancerPoolsPoolsOriginsHeader" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

&datacloudflareloadbalancerpools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeader {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLoadBalancerPoolsFilterOutputReference <a name="DataCloudflareLoadBalancerPoolsFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.NewDataCloudflareLoadBalancerPoolsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancerPoolsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilter">DataCloudflareLoadBalancerPoolsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancerPoolsFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsFilter">DataCloudflareLoadBalancerPoolsFilter</a>

---


### DataCloudflareLoadBalancerPoolsPoolsList <a name="DataCloudflareLoadBalancerPoolsPoolsList" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.NewDataCloudflareLoadBalancerPoolsPoolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareLoadBalancerPoolsPoolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.get"></a>

```go
func Get(index *f64) DataCloudflareLoadBalancerPoolsPoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList <a name="DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.NewDataCloudflareLoadBalancerPoolsPoolsLoadSheddingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.get"></a>

```go
func Get(index *f64) DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference <a name="DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.NewDataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.defaultPercent">DefaultPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.defaultPolicy">DefaultPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.sessionPercent">SessionPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.sessionPolicy">SessionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadShedding">DataCloudflareLoadBalancerPoolsPoolsLoadShedding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPercent`<sup>Required</sup> <a name="DefaultPercent" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.defaultPercent"></a>

```go
func DefaultPercent() *f64
```

- *Type:* *f64

---

##### `DefaultPolicy`<sup>Required</sup> <a name="DefaultPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.defaultPolicy"></a>

```go
func DefaultPolicy() *string
```

- *Type:* *string

---

##### `SessionPercent`<sup>Required</sup> <a name="SessionPercent" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.sessionPercent"></a>

```go
func SessionPercent() *f64
```

- *Type:* *f64

---

##### `SessionPolicy`<sup>Required</sup> <a name="SessionPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.sessionPolicy"></a>

```go
func SessionPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancerPoolsPoolsLoadShedding
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadShedding">DataCloudflareLoadBalancerPoolsPoolsLoadShedding</a>

---


### DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList <a name="DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.NewDataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.get"></a>

```go
func Get(index *f64) DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference <a name="DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.NewDataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeader">DataCloudflareLoadBalancerPoolsPoolsOriginsHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancerPoolsPoolsOriginsHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeader">DataCloudflareLoadBalancerPoolsPoolsOriginsHeader</a>

---


### DataCloudflareLoadBalancerPoolsPoolsOriginsList <a name="DataCloudflareLoadBalancerPoolsPoolsOriginsList" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.NewDataCloudflareLoadBalancerPoolsPoolsOriginsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareLoadBalancerPoolsPoolsOriginsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.get"></a>

```go
func Get(index *f64) DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference <a name="DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.NewDataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList">DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOrigins">DataCloudflareLoadBalancerPoolsPoolsOrigins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.header"></a>

```go
func Header() DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList">DataCloudflareLoadBalancerPoolsPoolsOriginsHeaderList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancerPoolsPoolsOrigins
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOrigins">DataCloudflareLoadBalancerPoolsPoolsOrigins</a>

---


### DataCloudflareLoadBalancerPoolsPoolsOutputReference <a name="DataCloudflareLoadBalancerPoolsPoolsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareloadbalancerpools"

datacloudflareloadbalancerpools.NewDataCloudflareLoadBalancerPoolsPoolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareLoadBalancerPoolsPoolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.checkRegions">CheckRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.latitude">Latitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.loadShedding">LoadShedding</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList">DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.longitude">Longitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.minimumOrigins">MinimumOrigins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.monitor">Monitor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.origins">Origins</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList">DataCloudflareLoadBalancerPoolsPoolsOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckRegions`<sup>Required</sup> <a name="CheckRegions" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.checkRegions"></a>

```go
func CheckRegions() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.latitude"></a>

```go
func Latitude() *f64
```

- *Type:* *f64

---

##### `LoadShedding`<sup>Required</sup> <a name="LoadShedding" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.loadShedding"></a>

```go
func LoadShedding() DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList">DataCloudflareLoadBalancerPoolsPoolsLoadSheddingList</a>

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.longitude"></a>

```go
func Longitude() *f64
```

- *Type:* *f64

---

##### `MinimumOrigins`<sup>Required</sup> <a name="MinimumOrigins" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.minimumOrigins"></a>

```go
func MinimumOrigins() *f64
```

- *Type:* *f64

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.monitor"></a>

```go
func Monitor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.notificationEmail"></a>

```go
func NotificationEmail() *string
```

- *Type:* *string

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.origins"></a>

```go
func Origins() DataCloudflareLoadBalancerPoolsPoolsOriginsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOriginsList">DataCloudflareLoadBalancerPoolsPoolsOriginsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsPoolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



