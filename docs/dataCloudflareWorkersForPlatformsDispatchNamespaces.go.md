# `dataCloudflareWorkersForPlatformsDispatchNamespaces` Submodule <a name="`dataCloudflareWorkersForPlatformsDispatchNamespaces` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkersForPlatformsDispatchNamespaces <a name="DataCloudflareWorkersForPlatformsDispatchNamespaces" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_for_platforms_dispatch_namespaces cloudflare_workers_for_platforms_dispatch_namespaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareworkersforplatformsdispatchnamespaces"

datacloudflareworkersforplatformsdispatchnamespaces.NewDataCloudflareWorkersForPlatformsDispatchNamespaces(scope Construct, id *string, config DataCloudflareWorkersForPlatformsDispatchNamespacesConfig) DataCloudflareWorkersForPlatformsDispatchNamespaces
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig">DataCloudflareWorkersForPlatformsDispatchNamespacesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig">DataCloudflareWorkersForPlatformsDispatchNamespacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWorkersForPlatformsDispatchNamespaces resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareworkersforplatformsdispatchnamespaces"

datacloudflareworkersforplatformsdispatchnamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareworkersforplatformsdispatchnamespaces"

datacloudflareworkersforplatformsdispatchnamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareworkersforplatformsdispatchnamespaces"

datacloudflareworkersforplatformsdispatchnamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareworkersforplatformsdispatchnamespaces"

datacloudflareworkersforplatformsdispatchnamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareWorkersForPlatformsDispatchNamespaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareWorkersForPlatformsDispatchNamespaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareWorkersForPlatformsDispatchNamespaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_for_platforms_dispatch_namespaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkersForPlatformsDispatchNamespaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList">DataCloudflareWorkersForPlatformsDispatchNamespacesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.result"></a>

```go
func Result() DataCloudflareWorkersForPlatformsDispatchNamespacesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList">DataCloudflareWorkersForPlatformsDispatchNamespacesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkersForPlatformsDispatchNamespacesConfig <a name="DataCloudflareWorkersForPlatformsDispatchNamespacesConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareworkersforplatformsdispatchnamespaces"

&datacloudflareworkersforplatformsdispatchnamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	MaxItems: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_for_platforms_dispatch_namespaces#account_id DataCloudflareWorkersForPlatformsDispatchNamespaces#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_for_platforms_dispatch_namespaces#max_items DataCloudflareWorkersForPlatformsDispatchNamespaces#max_items}

---

### DataCloudflareWorkersForPlatformsDispatchNamespacesResult <a name="DataCloudflareWorkersForPlatformsDispatchNamespacesResult" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareworkersforplatformsdispatchnamespaces"

&datacloudflareworkersforplatformsdispatchnamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkersForPlatformsDispatchNamespacesResultList <a name="DataCloudflareWorkersForPlatformsDispatchNamespacesResultList" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareworkersforplatformsdispatchnamespaces"

datacloudflareworkersforplatformsdispatchnamespaces.NewDataCloudflareWorkersForPlatformsDispatchNamespacesResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWorkersForPlatformsDispatchNamespacesResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.get"></a>

```go
func Get(index *f64) DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference <a name="DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareworkersforplatformsdispatchnamespaces"

datacloudflareworkersforplatformsdispatchnamespaces.NewDataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.modifiedBy">ModifiedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.scriptCount">ScriptCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult">DataCloudflareWorkersForPlatformsDispatchNamespacesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.modifiedBy"></a>

```go
func ModifiedBy() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `ScriptCount`<sup>Required</sup> <a name="ScriptCount" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.scriptCount"></a>

```go
func ScriptCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWorkersForPlatformsDispatchNamespacesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult">DataCloudflareWorkersForPlatformsDispatchNamespacesResult</a>

---



