# `dataCloudflareZoneLockdown` Submodule <a name="`dataCloudflareZoneLockdown` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZoneLockdown <a name="DataCloudflareZoneLockdown" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown cloudflare_zone_lockdown}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezonelockdown"

datacloudflarezonelockdown.NewDataCloudflareZoneLockdown(scope Construct, id *string, config DataCloudflareZoneLockdownConfig) DataCloudflareZoneLockdown
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig">DataCloudflareZoneLockdownConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig">DataCloudflareZoneLockdownConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetLockDownsId">ResetLockDownsId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter"></a>

```go
func PutFilter(value DataCloudflareZoneLockdownFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetLockDownsId` <a name="ResetLockDownsId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetLockDownsId"></a>

```go
func ResetLockDownsId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZoneLockdown resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezonelockdown"

datacloudflarezonelockdown.DataCloudflareZoneLockdown_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezonelockdown"

datacloudflarezonelockdown.DataCloudflareZoneLockdown_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezonelockdown"

datacloudflarezonelockdown.DataCloudflareZoneLockdown_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezonelockdown"

datacloudflarezonelockdown.DataCloudflareZoneLockdown_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZoneLockdown resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZoneLockdown to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZoneLockdown that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZoneLockdown to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.configurations">Configurations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList">DataCloudflareZoneLockdownConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference">DataCloudflareZoneLockdownFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.paused">Paused</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.urls">Urls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lockDownsIdInput">LockDownsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lockDownsId">LockDownsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.configurations"></a>

```go
func Configurations() DataCloudflareZoneLockdownConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList">DataCloudflareZoneLockdownConfigurationsList</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.filter"></a>

```go
func Filter() DataCloudflareZoneLockdownFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference">DataCloudflareZoneLockdownFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.paused"></a>

```go
func Paused() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.urls"></a>

```go
func Urls() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `LockDownsIdInput`<sup>Optional</sup> <a name="LockDownsIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lockDownsIdInput"></a>

```go
func LockDownsIdInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `LockDownsId`<sup>Required</sup> <a name="LockDownsId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lockDownsId"></a>

```go
func LockDownsId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZoneLockdownConfig <a name="DataCloudflareZoneLockdownConfig" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezonelockdown"

&datacloudflarezonelockdown.DataCloudflareZoneLockdownConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter,
	LockDownsId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#filter DataCloudflareZoneLockdown#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.lockDownsId">LockDownsId</a></code> | <code>*string</code> | The unique identifier of the Zone Lockdown rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#zone_id DataCloudflareZoneLockdown#zone_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.filter"></a>

```go
Filter DataCloudflareZoneLockdownFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#filter DataCloudflareZoneLockdown#filter}.

---

##### `LockDownsId`<sup>Optional</sup> <a name="LockDownsId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.lockDownsId"></a>

```go
LockDownsId *string
```

- *Type:* *string

The unique identifier of the Zone Lockdown rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#lock_downs_id DataCloudflareZoneLockdown#lock_downs_id}

---

### DataCloudflareZoneLockdownConfigurations <a name="DataCloudflareZoneLockdownConfigurations" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezonelockdown"

&datacloudflarezonelockdown.DataCloudflareZoneLockdownConfigurations {

}
```


### DataCloudflareZoneLockdownFilter <a name="DataCloudflareZoneLockdownFilter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezonelockdown"

&datacloudflarezonelockdown.DataCloudflareZoneLockdownFilter {
	CreatedOn: *string,
	Description: *string,
	DescriptionSearch: *string,
	Ip: *string,
	IpRangeSearch: *string,
	IpSearch: *string,
	ModifiedOn: *string,
	Priority: *f64,
	UriSearch: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.createdOn">CreatedOn</a></code> | <code>*string</code> | The timestamp of when the rule was created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.description">Description</a></code> | <code>*string</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.descriptionSearch">DescriptionSearch</a></code> | <code>*string</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ip">Ip</a></code> | <code>*string</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ipRangeSearch">IpRangeSearch</a></code> | <code>*string</code> | A single IP address range to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ipSearch">IpSearch</a></code> | <code>*string</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | The timestamp of when the rule was last modified. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.priority">Priority</a></code> | <code>*f64</code> | The priority of the rule to control the processing order. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.uriSearch">UriSearch</a></code> | <code>*string</code> | A single URI to search for in the list of URLs of existing rules. |

---

##### `CreatedOn`<sup>Optional</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.createdOn"></a>

```go
CreatedOn *string
```

- *Type:* *string

The timestamp of when the rule was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#created_on DataCloudflareZoneLockdown#created_on}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.description"></a>

```go
Description *string
```

- *Type:* *string

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#description DataCloudflareZoneLockdown#description}

---

##### `DescriptionSearch`<sup>Optional</sup> <a name="DescriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.descriptionSearch"></a>

```go
DescriptionSearch *string
```

- *Type:* *string

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#description_search DataCloudflareZoneLockdown#description_search}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#ip DataCloudflareZoneLockdown#ip}

---

##### `IpRangeSearch`<sup>Optional</sup> <a name="IpRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ipRangeSearch"></a>

```go
IpRangeSearch *string
```

- *Type:* *string

A single IP address range to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#ip_range_search DataCloudflareZoneLockdown#ip_range_search}

---

##### `IpSearch`<sup>Optional</sup> <a name="IpSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ipSearch"></a>

```go
IpSearch *string
```

- *Type:* *string

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#ip_search DataCloudflareZoneLockdown#ip_search}

---

##### `ModifiedOn`<sup>Optional</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.modifiedOn"></a>

```go
ModifiedOn *string
```

- *Type:* *string

The timestamp of when the rule was last modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#modified_on DataCloudflareZoneLockdown#modified_on}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The priority of the rule to control the processing order.

A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#priority DataCloudflareZoneLockdown#priority}

---

##### `UriSearch`<sup>Optional</sup> <a name="UriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.uriSearch"></a>

```go
UriSearch *string
```

- *Type:* *string

A single URI to search for in the list of URLs of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zone_lockdown#uri_search DataCloudflareZoneLockdown#uri_search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZoneLockdownConfigurationsList <a name="DataCloudflareZoneLockdownConfigurationsList" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezonelockdown"

datacloudflarezonelockdown.NewDataCloudflareZoneLockdownConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZoneLockdownConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.get"></a>

```go
func Get(index *f64) DataCloudflareZoneLockdownConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZoneLockdownConfigurationsOutputReference <a name="DataCloudflareZoneLockdownConfigurationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezonelockdown"

datacloudflarezonelockdown.NewDataCloudflareZoneLockdownConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZoneLockdownConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations">DataCloudflareZoneLockdownConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZoneLockdownConfigurations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations">DataCloudflareZoneLockdownConfigurations</a>

---


### DataCloudflareZoneLockdownFilterOutputReference <a name="DataCloudflareZoneLockdownFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezonelockdown"

datacloudflarezonelockdown.NewDataCloudflareZoneLockdownFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZoneLockdownFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetCreatedOn">ResetCreatedOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetDescriptionSearch">ResetDescriptionSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIpRangeSearch">ResetIpRangeSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIpSearch">ResetIpSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetModifiedOn">ResetModifiedOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetUriSearch">ResetUriSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreatedOn` <a name="ResetCreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetCreatedOn"></a>

```go
func ResetCreatedOn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDescriptionSearch` <a name="ResetDescriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetDescriptionSearch"></a>

```go
func ResetDescriptionSearch()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIp"></a>

```go
func ResetIp()
```

##### `ResetIpRangeSearch` <a name="ResetIpRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIpRangeSearch"></a>

```go
func ResetIpRangeSearch()
```

##### `ResetIpSearch` <a name="ResetIpSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIpSearch"></a>

```go
func ResetIpSearch()
```

##### `ResetModifiedOn` <a name="ResetModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetModifiedOn"></a>

```go
func ResetModifiedOn()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetUriSearch` <a name="ResetUriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetUriSearch"></a>

```go
func ResetUriSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.createdOnInput">CreatedOnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionSearchInput">DescriptionSearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipRangeSearchInput">IpRangeSearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipSearchInput">IpSearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.modifiedOnInput">ModifiedOnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.uriSearchInput">UriSearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionSearch">DescriptionSearch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipRangeSearch">IpRangeSearch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipSearch">IpSearch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.uriSearch">UriSearch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedOnInput`<sup>Optional</sup> <a name="CreatedOnInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.createdOnInput"></a>

```go
func CreatedOnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DescriptionSearchInput`<sup>Optional</sup> <a name="DescriptionSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionSearchInput"></a>

```go
func DescriptionSearchInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `IpRangeSearchInput`<sup>Optional</sup> <a name="IpRangeSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipRangeSearchInput"></a>

```go
func IpRangeSearchInput() *string
```

- *Type:* *string

---

##### `IpSearchInput`<sup>Optional</sup> <a name="IpSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipSearchInput"></a>

```go
func IpSearchInput() *string
```

- *Type:* *string

---

##### `ModifiedOnInput`<sup>Optional</sup> <a name="ModifiedOnInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.modifiedOnInput"></a>

```go
func ModifiedOnInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `UriSearchInput`<sup>Optional</sup> <a name="UriSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.uriSearchInput"></a>

```go
func UriSearchInput() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DescriptionSearch`<sup>Required</sup> <a name="DescriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionSearch"></a>

```go
func DescriptionSearch() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `IpRangeSearch`<sup>Required</sup> <a name="IpRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipRangeSearch"></a>

```go
func IpRangeSearch() *string
```

- *Type:* *string

---

##### `IpSearch`<sup>Required</sup> <a name="IpSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipSearch"></a>

```go
func IpSearch() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `UriSearch`<sup>Required</sup> <a name="UriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.uriSearch"></a>

```go
func UriSearch() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



