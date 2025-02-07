# `dataCloudflareLoadBalancerPool` Submodule <a name="`dataCloudflareLoadBalancerPool` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLoadBalancerPool <a name="DataCloudflareLoadBalancerPool" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/load_balancer_pool cloudflare_load_balancer_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.NewDataCloudflareLoadBalancerPool(scope Construct, id *string, config DataCloudflareLoadBalancerPoolConfig) DataCloudflareLoadBalancerPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig">DataCloudflareLoadBalancerPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig">DataCloudflareLoadBalancerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.resetPoolId">ResetPoolId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.putFilter"></a>

```go
func PutFilter(value DataCloudflareLoadBalancerPoolFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter">DataCloudflareLoadBalancerPoolFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetPoolId` <a name="ResetPoolId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.resetPoolId"></a>

```go
func ResetPoolId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareLoadBalancerPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPool_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareLoadBalancerPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareLoadBalancerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareLoadBalancerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/load_balancer_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareLoadBalancerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.checkRegions">CheckRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.disabledAt">DisabledAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference">DataCloudflareLoadBalancerPoolFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.latitude">Latitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.loadShedding">LoadShedding</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference">DataCloudflareLoadBalancerPoolLoadSheddingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.longitude">Longitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.minimumOrigins">MinimumOrigins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.monitor">Monitor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.networks">Networks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.notificationFilter">NotificationFilter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference">DataCloudflareLoadBalancerPoolNotificationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.origins">Origins</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList">DataCloudflareLoadBalancerPoolOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.originSteering">OriginSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference">DataCloudflareLoadBalancerPoolOriginSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.poolIdInput">PoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CheckRegions`<sup>Required</sup> <a name="CheckRegions" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.checkRegions"></a>

```go
func CheckRegions() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisabledAt`<sup>Required</sup> <a name="DisabledAt" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.disabledAt"></a>

```go
func DisabledAt() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.filter"></a>

```go
func Filter() DataCloudflareLoadBalancerPoolFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference">DataCloudflareLoadBalancerPoolFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.latitude"></a>

```go
func Latitude() *f64
```

- *Type:* *f64

---

##### `LoadShedding`<sup>Required</sup> <a name="LoadShedding" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.loadShedding"></a>

```go
func LoadShedding() DataCloudflareLoadBalancerPoolLoadSheddingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference">DataCloudflareLoadBalancerPoolLoadSheddingOutputReference</a>

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.longitude"></a>

```go
func Longitude() *f64
```

- *Type:* *f64

---

##### `MinimumOrigins`<sup>Required</sup> <a name="MinimumOrigins" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.minimumOrigins"></a>

```go
func MinimumOrigins() *f64
```

- *Type:* *f64

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.monitor"></a>

```go
func Monitor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.networks"></a>

```go
func Networks() *[]*string
```

- *Type:* *[]*string

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.notificationEmail"></a>

```go
func NotificationEmail() *string
```

- *Type:* *string

---

##### `NotificationFilter`<sup>Required</sup> <a name="NotificationFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.notificationFilter"></a>

```go
func NotificationFilter() DataCloudflareLoadBalancerPoolNotificationFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference">DataCloudflareLoadBalancerPoolNotificationFilterOutputReference</a>

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.origins"></a>

```go
func Origins() DataCloudflareLoadBalancerPoolOriginsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList">DataCloudflareLoadBalancerPoolOriginsList</a>

---

##### `OriginSteering`<sup>Required</sup> <a name="OriginSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.originSteering"></a>

```go
func OriginSteering() DataCloudflareLoadBalancerPoolOriginSteeringOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference">DataCloudflareLoadBalancerPoolOriginSteeringOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.poolIdInput"></a>

```go
func PoolIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLoadBalancerPoolConfig <a name="DataCloudflareLoadBalancerPoolConfig" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

&datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter,
	PoolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter">DataCloudflareLoadBalancerPoolFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/load_balancer_pool#filter DataCloudflareLoadBalancerPool#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.poolId">PoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/load_balancer_pool#pool_id DataCloudflareLoadBalancerPool#pool_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/load_balancer_pool#account_id DataCloudflareLoadBalancerPool#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.filter"></a>

```go
Filter DataCloudflareLoadBalancerPoolFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter">DataCloudflareLoadBalancerPoolFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/load_balancer_pool#filter DataCloudflareLoadBalancerPool#filter}.

---

##### `PoolId`<sup>Optional</sup> <a name="PoolId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.poolId"></a>

```go
PoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/load_balancer_pool#pool_id DataCloudflareLoadBalancerPool#pool_id}.

---

### DataCloudflareLoadBalancerPoolFilter <a name="DataCloudflareLoadBalancerPoolFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

&datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPoolFilter {
	Monitor: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter.property.monitor">Monitor</a></code> | <code>*string</code> | The ID of the Monitor to use for checking the health of origins within this pool. |

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter.property.monitor"></a>

```go
Monitor *string
```

- *Type:* *string

The ID of the Monitor to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/load_balancer_pool#monitor DataCloudflareLoadBalancerPool#monitor}

---

### DataCloudflareLoadBalancerPoolLoadShedding <a name="DataCloudflareLoadBalancerPoolLoadShedding" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadShedding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadShedding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

&datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPoolLoadShedding {

}
```


### DataCloudflareLoadBalancerPoolNotificationFilter <a name="DataCloudflareLoadBalancerPoolNotificationFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

&datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPoolNotificationFilter {

}
```


### DataCloudflareLoadBalancerPoolNotificationFilterOrigin <a name="DataCloudflareLoadBalancerPoolNotificationFilterOrigin" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOrigin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

&datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPoolNotificationFilterOrigin {

}
```


### DataCloudflareLoadBalancerPoolNotificationFilterPool <a name="DataCloudflareLoadBalancerPoolNotificationFilterPool" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

&datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPoolNotificationFilterPool {

}
```


### DataCloudflareLoadBalancerPoolOrigins <a name="DataCloudflareLoadBalancerPoolOrigins" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOrigins.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

&datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPoolOrigins {

}
```


### DataCloudflareLoadBalancerPoolOriginsHeader <a name="DataCloudflareLoadBalancerPoolOriginsHeader" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

&datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPoolOriginsHeader {

}
```


### DataCloudflareLoadBalancerPoolOriginSteering <a name="DataCloudflareLoadBalancerPoolOriginSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

&datacloudflareloadbalancerpool.DataCloudflareLoadBalancerPoolOriginSteering {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLoadBalancerPoolFilterOutputReference <a name="DataCloudflareLoadBalancerPoolFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.NewDataCloudflareLoadBalancerPoolFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancerPoolFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.resetMonitor">ResetMonitor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.resetMonitor"></a>

```go
func ResetMonitor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.monitorInput">MonitorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.monitor">Monitor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.monitorInput"></a>

```go
func MonitorInput() *string
```

- *Type:* *string

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.monitor"></a>

```go
func Monitor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareLoadBalancerPoolLoadSheddingOutputReference <a name="DataCloudflareLoadBalancerPoolLoadSheddingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.NewDataCloudflareLoadBalancerPoolLoadSheddingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancerPoolLoadSheddingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent">DefaultPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy">DefaultPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent">SessionPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy">SessionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadShedding">DataCloudflareLoadBalancerPoolLoadShedding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPercent`<sup>Required</sup> <a name="DefaultPercent" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent"></a>

```go
func DefaultPercent() *f64
```

- *Type:* *f64

---

##### `DefaultPolicy`<sup>Required</sup> <a name="DefaultPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy"></a>

```go
func DefaultPolicy() *string
```

- *Type:* *string

---

##### `SessionPercent`<sup>Required</sup> <a name="SessionPercent" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent"></a>

```go
func SessionPercent() *f64
```

- *Type:* *f64

---

##### `SessionPolicy`<sup>Required</sup> <a name="SessionPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy"></a>

```go
func SessionPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancerPoolLoadShedding
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadShedding">DataCloudflareLoadBalancerPoolLoadShedding</a>

---


### DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference <a name="DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.NewDataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.disable">Disable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.healthy">Healthy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOrigin">DataCloudflareLoadBalancerPoolNotificationFilterOrigin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.disable"></a>

```go
func Disable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.healthy"></a>

```go
func Healthy() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancerPoolNotificationFilterOrigin
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOrigin">DataCloudflareLoadBalancerPoolNotificationFilterOrigin</a>

---


### DataCloudflareLoadBalancerPoolNotificationFilterOutputReference <a name="DataCloudflareLoadBalancerPoolNotificationFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.NewDataCloudflareLoadBalancerPoolNotificationFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancerPoolNotificationFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference">DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.pool">Pool</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference">DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilter">DataCloudflareLoadBalancerPoolNotificationFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.origin"></a>

```go
func Origin() DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference">DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference</a>

---

##### `Pool`<sup>Required</sup> <a name="Pool" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.pool"></a>

```go
func Pool() DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference">DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancerPoolNotificationFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilter">DataCloudflareLoadBalancerPoolNotificationFilter</a>

---


### DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference <a name="DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.NewDataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.disable">Disable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.healthy">Healthy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPool">DataCloudflareLoadBalancerPoolNotificationFilterPool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.disable"></a>

```go
func Disable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.healthy"></a>

```go
func Healthy() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancerPoolNotificationFilterPool
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPool">DataCloudflareLoadBalancerPoolNotificationFilterPool</a>

---


### DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference <a name="DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.NewDataCloudflareLoadBalancerPoolOriginsHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.host">Host</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeader">DataCloudflareLoadBalancerPoolOriginsHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.host"></a>

```go
func Host() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancerPoolOriginsHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeader">DataCloudflareLoadBalancerPoolOriginsHeader</a>

---


### DataCloudflareLoadBalancerPoolOriginsList <a name="DataCloudflareLoadBalancerPoolOriginsList" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.NewDataCloudflareLoadBalancerPoolOriginsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareLoadBalancerPoolOriginsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.get"></a>

```go
func Get(index *f64) DataCloudflareLoadBalancerPoolOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareLoadBalancerPoolOriginsOutputReference <a name="DataCloudflareLoadBalancerPoolOriginsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.NewDataCloudflareLoadBalancerPoolOriginsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareLoadBalancerPoolOriginsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.disabledAt">DisabledAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference">DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOrigins">DataCloudflareLoadBalancerPoolOrigins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `DisabledAt`<sup>Required</sup> <a name="DisabledAt" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.disabledAt"></a>

```go
func DisabledAt() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.header"></a>

```go
func Header() DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference">DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancerPoolOrigins
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOrigins">DataCloudflareLoadBalancerPoolOrigins</a>

---


### DataCloudflareLoadBalancerPoolOriginSteeringOutputReference <a name="DataCloudflareLoadBalancerPoolOriginSteeringOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareloadbalancerpool"

datacloudflareloadbalancerpool.NewDataCloudflareLoadBalancerPoolOriginSteeringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLoadBalancerPoolOriginSteeringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteering">DataCloudflareLoadBalancerPoolOriginSteering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLoadBalancerPoolOriginSteering
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteering">DataCloudflareLoadBalancerPoolOriginSteering</a>

---



