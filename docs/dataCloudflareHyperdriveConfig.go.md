# `dataCloudflareHyperdriveConfig` Submodule <a name="`dataCloudflareHyperdriveConfig` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareHyperdriveConfig <a name="DataCloudflareHyperdriveConfig" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/hyperdrive_config cloudflare_hyperdrive_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarehyperdriveconfig"

datacloudflarehyperdriveconfig.NewDataCloudflareHyperdriveConfig(scope Construct, id *string, config DataCloudflareHyperdriveConfigConfig) DataCloudflareHyperdriveConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig">DataCloudflareHyperdriveConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig">DataCloudflareHyperdriveConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.resetHyperdriveId">ResetHyperdriveId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetHyperdriveId` <a name="ResetHyperdriveId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.resetHyperdriveId"></a>

```go
func ResetHyperdriveId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareHyperdriveConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarehyperdriveconfig"

datacloudflarehyperdriveconfig.DataCloudflareHyperdriveConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarehyperdriveconfig"

datacloudflarehyperdriveconfig.DataCloudflareHyperdriveConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarehyperdriveconfig"

datacloudflarehyperdriveconfig.DataCloudflareHyperdriveConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarehyperdriveconfig"

datacloudflarehyperdriveconfig.DataCloudflareHyperdriveConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareHyperdriveConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareHyperdriveConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareHyperdriveConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/hyperdrive_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareHyperdriveConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.caching">Caching</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference">DataCloudflareHyperdriveConfigCachingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.mtls">Mtls</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference">DataCloudflareHyperdriveConfigMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference">DataCloudflareHyperdriveConfigOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.originConnectionLimit">OriginConnectionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.hyperdriveIdInput">HyperdriveIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.hyperdriveId">HyperdriveId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.caching"></a>

```go
func Caching() DataCloudflareHyperdriveConfigCachingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference">DataCloudflareHyperdriveConfigCachingOutputReference</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Mtls`<sup>Required</sup> <a name="Mtls" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.mtls"></a>

```go
func Mtls() DataCloudflareHyperdriveConfigMtlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference">DataCloudflareHyperdriveConfigMtlsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.origin"></a>

```go
func Origin() DataCloudflareHyperdriveConfigOriginOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference">DataCloudflareHyperdriveConfigOriginOutputReference</a>

---

##### `OriginConnectionLimit`<sup>Required</sup> <a name="OriginConnectionLimit" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.originConnectionLimit"></a>

```go
func OriginConnectionLimit() *f64
```

- *Type:* *f64

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `HyperdriveIdInput`<sup>Optional</sup> <a name="HyperdriveIdInput" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.hyperdriveIdInput"></a>

```go
func HyperdriveIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `HyperdriveId`<sup>Required</sup> <a name="HyperdriveId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.hyperdriveId"></a>

```go
func HyperdriveId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareHyperdriveConfigCaching <a name="DataCloudflareHyperdriveConfigCaching" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarehyperdriveconfig"

&datacloudflarehyperdriveconfig.DataCloudflareHyperdriveConfigCaching {

}
```


### DataCloudflareHyperdriveConfigConfig <a name="DataCloudflareHyperdriveConfigConfig" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarehyperdriveconfig"

&datacloudflarehyperdriveconfig.DataCloudflareHyperdriveConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	HyperdriveId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Define configurations using a unique string identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.hyperdriveId">HyperdriveId</a></code> | <code>*string</code> | Define configurations using a unique string identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/hyperdrive_config#account_id DataCloudflareHyperdriveConfig#account_id}

---

##### `HyperdriveId`<sup>Optional</sup> <a name="HyperdriveId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.hyperdriveId"></a>

```go
HyperdriveId *string
```

- *Type:* *string

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/hyperdrive_config#hyperdrive_id DataCloudflareHyperdriveConfig#hyperdrive_id}

---

### DataCloudflareHyperdriveConfigMtls <a name="DataCloudflareHyperdriveConfigMtls" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarehyperdriveconfig"

&datacloudflarehyperdriveconfig.DataCloudflareHyperdriveConfigMtls {

}
```


### DataCloudflareHyperdriveConfigOrigin <a name="DataCloudflareHyperdriveConfigOrigin" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarehyperdriveconfig"

&datacloudflarehyperdriveconfig.DataCloudflareHyperdriveConfigOrigin {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareHyperdriveConfigCachingOutputReference <a name="DataCloudflareHyperdriveConfigCachingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarehyperdriveconfig"

datacloudflarehyperdriveconfig.NewDataCloudflareHyperdriveConfigCachingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareHyperdriveConfigCachingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.disabled">Disabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.maxAge">MaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.staleWhileRevalidate">StaleWhileRevalidate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching">DataCloudflareHyperdriveConfigCaching</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.maxAge"></a>

```go
func MaxAge() *f64
```

- *Type:* *f64

---

##### `StaleWhileRevalidate`<sup>Required</sup> <a name="StaleWhileRevalidate" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.staleWhileRevalidate"></a>

```go
func StaleWhileRevalidate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareHyperdriveConfigCaching
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching">DataCloudflareHyperdriveConfigCaching</a>

---


### DataCloudflareHyperdriveConfigMtlsOutputReference <a name="DataCloudflareHyperdriveConfigMtlsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarehyperdriveconfig"

datacloudflarehyperdriveconfig.NewDataCloudflareHyperdriveConfigMtlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareHyperdriveConfigMtlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.caCertificateId">CaCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.mtlsCertificateId">MtlsCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.sslmode">Sslmode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls">DataCloudflareHyperdriveConfigMtls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertificateId`<sup>Required</sup> <a name="CaCertificateId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.caCertificateId"></a>

```go
func CaCertificateId() *string
```

- *Type:* *string

---

##### `MtlsCertificateId`<sup>Required</sup> <a name="MtlsCertificateId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.mtlsCertificateId"></a>

```go
func MtlsCertificateId() *string
```

- *Type:* *string

---

##### `Sslmode`<sup>Required</sup> <a name="Sslmode" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.sslmode"></a>

```go
func Sslmode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareHyperdriveConfigMtls
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls">DataCloudflareHyperdriveConfigMtls</a>

---


### DataCloudflareHyperdriveConfigOriginOutputReference <a name="DataCloudflareHyperdriveConfigOriginOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarehyperdriveconfig"

datacloudflarehyperdriveconfig.NewDataCloudflareHyperdriveConfigOriginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareHyperdriveConfigOriginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.accessClientId">AccessClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.accessClientSecret">AccessClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin">DataCloudflareHyperdriveConfigOrigin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessClientId`<sup>Required</sup> <a name="AccessClientId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.accessClientId"></a>

```go
func AccessClientId() *string
```

- *Type:* *string

---

##### `AccessClientSecret`<sup>Required</sup> <a name="AccessClientSecret" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.accessClientSecret"></a>

```go
func AccessClientSecret() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareHyperdriveConfigOrigin
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin">DataCloudflareHyperdriveConfigOrigin</a>

---



