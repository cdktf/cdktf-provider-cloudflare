# `dataCloudflareCustomHostnames` Submodule <a name="`dataCloudflareCustomHostnames` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCustomHostnames <a name="DataCloudflareCustomHostnames" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/custom_hostnames cloudflare_custom_hostnames}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.NewDataCloudflareCustomHostnames(scope Construct, id *string, config DataCloudflareCustomHostnamesConfig) DataCloudflareCustomHostnames
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig">DataCloudflareCustomHostnamesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig">DataCloudflareCustomHostnamesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetSsl">ResetSsl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetSsl"></a>

```go
func ResetSsl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareCustomHostnames resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.DataCloudflareCustomHostnames_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.DataCloudflareCustomHostnames_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.DataCloudflareCustomHostnames_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.DataCloudflareCustomHostnames_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareCustomHostnames resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareCustomHostnames to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareCustomHostnames that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/custom_hostnames#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCustomHostnames to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList">DataCloudflareCustomHostnamesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.sslInput">SslInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.ssl">Ssl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.result"></a>

```go
func Result() DataCloudflareCustomHostnamesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList">DataCloudflareCustomHostnamesResultList</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.sslInput"></a>

```go
func SslInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.ssl"></a>

```go
func Ssl() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCustomHostnamesConfig <a name="DataCloudflareCustomHostnamesConfig" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

&datacloudflarecustomhostnames.DataCloudflareCustomHostnamesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	Direction: *string,
	Hostname: *string,
	Id: *string,
	MaxItems: *f64,
	Order: *string,
	Ssl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.direction">Direction</a></code> | <code>*string</code> | Direction to order hostnames. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.id">Id</a></code> | <code>*string</code> | Hostname ID to match against. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.order">Order</a></code> | <code>*string</code> | Field to order hostnames by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.ssl">Ssl</a></code> | <code>*f64</code> | Whether to filter hostnames based on if they have SSL enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/custom_hostnames#zone_id DataCloudflareCustomHostnames#zone_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction to order hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/custom_hostnames#direction DataCloudflareCustomHostnames#direction}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/custom_hostnames#hostname DataCloudflareCustomHostnames#hostname}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Hostname ID to match against.

This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/custom_hostnames#id DataCloudflareCustomHostnames#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/custom_hostnames#max_items DataCloudflareCustomHostnames#max_items}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order hostnames by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/custom_hostnames#order DataCloudflareCustomHostnames#order}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.ssl"></a>

```go
Ssl *f64
```

- *Type:* *f64

Whether to filter hostnames based on if they have SSL enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/custom_hostnames#ssl DataCloudflareCustomHostnames#ssl}

---

### DataCloudflareCustomHostnamesResult <a name="DataCloudflareCustomHostnamesResult" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

&datacloudflarecustomhostnames.DataCloudflareCustomHostnamesResult {

}
```


### DataCloudflareCustomHostnamesResultOwnershipVerification <a name="DataCloudflareCustomHostnamesResultOwnershipVerification" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

&datacloudflarecustomhostnames.DataCloudflareCustomHostnamesResultOwnershipVerification {

}
```


### DataCloudflareCustomHostnamesResultOwnershipVerificationHttp <a name="DataCloudflareCustomHostnamesResultOwnershipVerificationHttp" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

&datacloudflarecustomhostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp {

}
```


### DataCloudflareCustomHostnamesResultSsl <a name="DataCloudflareCustomHostnamesResultSsl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

&datacloudflarecustomhostnames.DataCloudflareCustomHostnamesResultSsl {

}
```


### DataCloudflareCustomHostnamesResultSslSettings <a name="DataCloudflareCustomHostnamesResultSslSettings" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

&datacloudflarecustomhostnames.DataCloudflareCustomHostnamesResultSslSettings {

}
```


### DataCloudflareCustomHostnamesResultSslValidationErrors <a name="DataCloudflareCustomHostnamesResultSslValidationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

&datacloudflarecustomhostnames.DataCloudflareCustomHostnamesResultSslValidationErrors {

}
```


### DataCloudflareCustomHostnamesResultSslValidationRecords <a name="DataCloudflareCustomHostnamesResultSslValidationRecords" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

&datacloudflarecustomhostnames.DataCloudflareCustomHostnamesResultSslValidationRecords {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCustomHostnamesResultList <a name="DataCloudflareCustomHostnamesResultList" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.NewDataCloudflareCustomHostnamesResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareCustomHostnamesResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.get"></a>

```go
func Get(index *f64) DataCloudflareCustomHostnamesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareCustomHostnamesResultOutputReference <a name="DataCloudflareCustomHostnamesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.NewDataCloudflareCustomHostnamesResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareCustomHostnamesResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customMetadata">CustomMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customOriginServer">CustomOriginServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customOriginSni">CustomOriginSni</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ownershipVerification">OwnershipVerification</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference">DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ownershipVerificationHttp">OwnershipVerificationHttp</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference">DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ssl">Ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference">DataCloudflareCustomHostnamesResultSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.verificationErrors">VerificationErrors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult">DataCloudflareCustomHostnamesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customMetadata"></a>

```go
func CustomMetadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CustomOriginServer`<sup>Required</sup> <a name="CustomOriginServer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customOriginServer"></a>

```go
func CustomOriginServer() *string
```

- *Type:* *string

---

##### `CustomOriginSni`<sup>Required</sup> <a name="CustomOriginSni" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customOriginSni"></a>

```go
func CustomOriginSni() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OwnershipVerification`<sup>Required</sup> <a name="OwnershipVerification" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ownershipVerification"></a>

```go
func OwnershipVerification() DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference">DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference</a>

---

##### `OwnershipVerificationHttp`<sup>Required</sup> <a name="OwnershipVerificationHttp" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ownershipVerificationHttp"></a>

```go
func OwnershipVerificationHttp() DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference">DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference</a>

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ssl"></a>

```go
func Ssl() DataCloudflareCustomHostnamesResultSslOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference">DataCloudflareCustomHostnamesResultSslOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `VerificationErrors`<sup>Required</sup> <a name="VerificationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.verificationErrors"></a>

```go
func VerificationErrors() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareCustomHostnamesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult">DataCloudflareCustomHostnamesResult</a>

---


### DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference <a name="DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.NewDataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.httpBody">HttpBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.httpUrl">HttpUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp">DataCloudflareCustomHostnamesResultOwnershipVerificationHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpBody`<sup>Required</sup> <a name="HttpBody" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.httpBody"></a>

```go
func HttpBody() *string
```

- *Type:* *string

---

##### `HttpUrl`<sup>Required</sup> <a name="HttpUrl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.httpUrl"></a>

```go
func HttpUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareCustomHostnamesResultOwnershipVerificationHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp">DataCloudflareCustomHostnamesResultOwnershipVerificationHttp</a>

---


### DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference <a name="DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.NewDataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification">DataCloudflareCustomHostnamesResultOwnershipVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareCustomHostnamesResultOwnershipVerification
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification">DataCloudflareCustomHostnamesResultOwnershipVerification</a>

---


### DataCloudflareCustomHostnamesResultSslOutputReference <a name="DataCloudflareCustomHostnamesResultSslOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.NewDataCloudflareCustomHostnamesResultSslOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareCustomHostnamesResultSslOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.bundleMethod">BundleMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.certificateAuthority">CertificateAuthority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customCertificate">CustomCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customCsrId">CustomCsrId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customKey">CustomKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.expiresOn">ExpiresOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference">DataCloudflareCustomHostnamesResultSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.uploadedOn">UploadedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.validationErrors">ValidationErrors</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList">DataCloudflareCustomHostnamesResultSslValidationErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.validationRecords">ValidationRecords</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList">DataCloudflareCustomHostnamesResultSslValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.wildcard">Wildcard</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl">DataCloudflareCustomHostnamesResultSsl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BundleMethod`<sup>Required</sup> <a name="BundleMethod" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.bundleMethod"></a>

```go
func BundleMethod() *string
```

- *Type:* *string

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.certificateAuthority"></a>

```go
func CertificateAuthority() *string
```

- *Type:* *string

---

##### `CustomCertificate`<sup>Required</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customCertificate"></a>

```go
func CustomCertificate() *string
```

- *Type:* *string

---

##### `CustomCsrId`<sup>Required</sup> <a name="CustomCsrId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customCsrId"></a>

```go
func CustomCsrId() *string
```

- *Type:* *string

---

##### `CustomKey`<sup>Required</sup> <a name="CustomKey" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customKey"></a>

```go
func CustomKey() *string
```

- *Type:* *string

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.expiresOn"></a>

```go
func ExpiresOn() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.settings"></a>

```go
func Settings() DataCloudflareCustomHostnamesResultSslSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference">DataCloudflareCustomHostnamesResultSslSettingsOutputReference</a>

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UploadedOn`<sup>Required</sup> <a name="UploadedOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.uploadedOn"></a>

```go
func UploadedOn() *string
```

- *Type:* *string

---

##### `ValidationErrors`<sup>Required</sup> <a name="ValidationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.validationErrors"></a>

```go
func ValidationErrors() DataCloudflareCustomHostnamesResultSslValidationErrorsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList">DataCloudflareCustomHostnamesResultSslValidationErrorsList</a>

---

##### `ValidationRecords`<sup>Required</sup> <a name="ValidationRecords" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.validationRecords"></a>

```go
func ValidationRecords() DataCloudflareCustomHostnamesResultSslValidationRecordsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList">DataCloudflareCustomHostnamesResultSslValidationRecordsList</a>

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.wildcard"></a>

```go
func Wildcard() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareCustomHostnamesResultSsl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl">DataCloudflareCustomHostnamesResultSsl</a>

---


### DataCloudflareCustomHostnamesResultSslSettingsOutputReference <a name="DataCloudflareCustomHostnamesResultSslSettingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.NewDataCloudflareCustomHostnamesResultSslSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareCustomHostnamesResultSslSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.ciphers">Ciphers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.earlyHints">EarlyHints</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.http2">Http2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.tls13">Tls13</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings">DataCloudflareCustomHostnamesResultSslSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ciphers`<sup>Required</sup> <a name="Ciphers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.ciphers"></a>

```go
func Ciphers() *[]*string
```

- *Type:* *[]*string

---

##### `EarlyHints`<sup>Required</sup> <a name="EarlyHints" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.earlyHints"></a>

```go
func EarlyHints() *string
```

- *Type:* *string

---

##### `Http2`<sup>Required</sup> <a name="Http2" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.http2"></a>

```go
func Http2() *string
```

- *Type:* *string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.minTlsVersion"></a>

```go
func MinTlsVersion() *string
```

- *Type:* *string

---

##### `Tls13`<sup>Required</sup> <a name="Tls13" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.tls13"></a>

```go
func Tls13() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareCustomHostnamesResultSslSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings">DataCloudflareCustomHostnamesResultSslSettings</a>

---


### DataCloudflareCustomHostnamesResultSslValidationErrorsList <a name="DataCloudflareCustomHostnamesResultSslValidationErrorsList" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.NewDataCloudflareCustomHostnamesResultSslValidationErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareCustomHostnamesResultSslValidationErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.get"></a>

```go
func Get(index *f64) DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference <a name="DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.NewDataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors">DataCloudflareCustomHostnamesResultSslValidationErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareCustomHostnamesResultSslValidationErrors
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors">DataCloudflareCustomHostnamesResultSslValidationErrors</a>

---


### DataCloudflareCustomHostnamesResultSslValidationRecordsList <a name="DataCloudflareCustomHostnamesResultSslValidationRecordsList" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.NewDataCloudflareCustomHostnamesResultSslValidationRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareCustomHostnamesResultSslValidationRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.get"></a>

```go
func Get(index *f64) DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference <a name="DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarecustomhostnames"

datacloudflarecustomhostnames.NewDataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.emails">Emails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.httpBody">HttpBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.httpUrl">HttpUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.txtName">TxtName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.txtValue">TxtValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords">DataCloudflareCustomHostnamesResultSslValidationRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.emails"></a>

```go
func Emails() *[]*string
```

- *Type:* *[]*string

---

##### `HttpBody`<sup>Required</sup> <a name="HttpBody" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.httpBody"></a>

```go
func HttpBody() *string
```

- *Type:* *string

---

##### `HttpUrl`<sup>Required</sup> <a name="HttpUrl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.httpUrl"></a>

```go
func HttpUrl() *string
```

- *Type:* *string

---

##### `TxtName`<sup>Required</sup> <a name="TxtName" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.txtName"></a>

```go
func TxtName() *string
```

- *Type:* *string

---

##### `TxtValue`<sup>Required</sup> <a name="TxtValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.txtValue"></a>

```go
func TxtValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareCustomHostnamesResultSslValidationRecords
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords">DataCloudflareCustomHostnamesResultSslValidationRecords</a>

---



