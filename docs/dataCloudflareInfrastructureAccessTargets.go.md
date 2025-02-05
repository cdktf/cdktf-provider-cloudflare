# `dataCloudflareInfrastructureAccessTargets` Submodule <a name="`dataCloudflareInfrastructureAccessTargets` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareInfrastructureAccessTargets <a name="DataCloudflareInfrastructureAccessTargets" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets cloudflare_infrastructure_access_targets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

datacloudflareinfrastructureaccesstargets.NewDataCloudflareInfrastructureAccessTargets(scope Construct, id *string, config DataCloudflareInfrastructureAccessTargetsConfig) DataCloudflareInfrastructureAccessTargets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig">DataCloudflareInfrastructureAccessTargetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig">DataCloudflareInfrastructureAccessTargetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetCreatedAfter">ResetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostnameContains">ResetHostnameContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv4">ResetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetModifiedAfter">ResetModifiedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCreatedAfter` <a name="ResetCreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetCreatedAfter"></a>

```go
func ResetCreatedAfter()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetHostnameContains` <a name="ResetHostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostnameContains"></a>

```go
func ResetHostnameContains()
```

##### `ResetIpv4` <a name="ResetIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv4"></a>

```go
func ResetIpv4()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv6"></a>

```go
func ResetIpv6()
```

##### `ResetModifiedAfter` <a name="ResetModifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetModifiedAfter"></a>

```go
func ResetModifiedAfter()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareInfrastructureAccessTargets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

datacloudflareinfrastructureaccesstargets.DataCloudflareInfrastructureAccessTargets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

datacloudflareinfrastructureaccesstargets.DataCloudflareInfrastructureAccessTargets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

datacloudflareinfrastructureaccesstargets.DataCloudflareInfrastructureAccessTargets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

datacloudflareinfrastructureaccesstargets.DataCloudflareInfrastructureAccessTargets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareInfrastructureAccessTargets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareInfrastructureAccessTargets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareInfrastructureAccessTargets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareInfrastructureAccessTargets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList">DataCloudflareInfrastructureAccessTargetsTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfterInput">CreatedAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContainsInput">HostnameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4Input">Ipv4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6Input">Ipv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfterInput">ModifiedAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfter">CreatedAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContains">HostnameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4">Ipv4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6">Ipv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfter">ModifiedAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.targets"></a>

```go
func Targets() DataCloudflareInfrastructureAccessTargetsTargetsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList">DataCloudflareInfrastructureAccessTargetsTargetsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CreatedAfterInput`<sup>Optional</sup> <a name="CreatedAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfterInput"></a>

```go
func CreatedAfterInput() *string
```

- *Type:* *string

---

##### `HostnameContainsInput`<sup>Optional</sup> <a name="HostnameContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContainsInput"></a>

```go
func HostnameContainsInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4Input"></a>

```go
func Ipv4Input() *string
```

- *Type:* *string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6Input"></a>

```go
func Ipv6Input() *string
```

- *Type:* *string

---

##### `ModifiedAfterInput`<sup>Optional</sup> <a name="ModifiedAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfterInput"></a>

```go
func ModifiedAfterInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CreatedAfter`<sup>Required</sup> <a name="CreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfter"></a>

```go
func CreatedAfter() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `HostnameContains`<sup>Required</sup> <a name="HostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContains"></a>

```go
func HostnameContains() *string
```

- *Type:* *string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4"></a>

```go
func Ipv4() *string
```

- *Type:* *string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6"></a>

```go
func Ipv6() *string
```

- *Type:* *string

---

##### `ModifiedAfter`<sup>Required</sup> <a name="ModifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfter"></a>

```go
func ModifiedAfter() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareInfrastructureAccessTargetsConfig <a name="DataCloudflareInfrastructureAccessTargetsConfig" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

&datacloudflareinfrastructureaccesstargets.DataCloudflareInfrastructureAccessTargetsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	CreatedAfter: *string,
	Hostname: *string,
	HostnameContains: *string,
	Ipv4: *string,
	Ipv6: *string,
	ModifiedAfter: *string,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.createdAfter">CreatedAfter</a></code> | <code>*string</code> | A date and time after a target was created to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostname">Hostname</a></code> | <code>*string</code> | The hostname of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostnameContains">HostnameContains</a></code> | <code>*string</code> | Partial match to the hostname of a target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv4">Ipv4</a></code> | <code>*string</code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv6">Ipv6</a></code> | <code>*string</code> | The target's IPv6 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.modifiedAfter">ModifiedAfter</a></code> | <code>*string</code> | A date and time after a target was modified to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | The private virtual network identifier for the target. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#account_id DataCloudflareInfrastructureAccessTargets#account_id}

---

##### `CreatedAfter`<sup>Optional</sup> <a name="CreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.createdAfter"></a>

```go
CreatedAfter *string
```

- *Type:* *string

A date and time after a target was created to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#created_after DataCloudflareInfrastructureAccessTargets#created_after}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

The hostname of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#hostname DataCloudflareInfrastructureAccessTargets#hostname}

---

##### `HostnameContains`<sup>Optional</sup> <a name="HostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostnameContains"></a>

```go
HostnameContains *string
```

- *Type:* *string

Partial match to the hostname of a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#hostname_contains DataCloudflareInfrastructureAccessTargets#hostname_contains}

---

##### `Ipv4`<sup>Optional</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv4"></a>

```go
Ipv4 *string
```

- *Type:* *string

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#ipv4 DataCloudflareInfrastructureAccessTargets#ipv4}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv6"></a>

```go
Ipv6 *string
```

- *Type:* *string

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#ipv6 DataCloudflareInfrastructureAccessTargets#ipv6}

---

##### `ModifiedAfter`<sup>Optional</sup> <a name="ModifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.modifiedAfter"></a>

```go
ModifiedAfter *string
```

- *Type:* *string

A date and time after a target was modified to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#modified_after DataCloudflareInfrastructureAccessTargets#modified_after}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

### DataCloudflareInfrastructureAccessTargetsTargets <a name="DataCloudflareInfrastructureAccessTargetsTargets" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

&datacloudflareinfrastructureaccesstargets.DataCloudflareInfrastructureAccessTargetsTargets {
	Ip: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets.property.ip">Ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets.property.ip"></a>

```go
Ip DataCloudflareInfrastructureAccessTargetsTargetsIp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#ip DataCloudflareInfrastructureAccessTargets#ip}

---

### DataCloudflareInfrastructureAccessTargetsTargetsIp <a name="DataCloudflareInfrastructureAccessTargetsTargetsIp" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

&datacloudflareinfrastructureaccesstargets.DataCloudflareInfrastructureAccessTargetsTargetsIp {
	Ipv4: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4,
	Ipv6: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a></code> | The target's IPv6 address. |

---

##### `Ipv4`<sup>Optional</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv4"></a>

```go
Ipv4 DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#ipv4 DataCloudflareInfrastructureAccessTargets#ipv4}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv6"></a>

```go
Ipv6 DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#ipv6 DataCloudflareInfrastructureAccessTargets#ipv6}

---

### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4 <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

&datacloudflareinfrastructureaccesstargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4 {
	IpAddr: *string,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.ipAddr">IpAddr</a></code> | <code>*string</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | The private virtual network identifier for the target. |

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.ipAddr"></a>

```go
IpAddr *string
```

- *Type:* *string

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#ip_addr DataCloudflareInfrastructureAccessTargets#ip_addr}

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6 <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

&datacloudflareinfrastructureaccesstargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6 {
	IpAddr: *string,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.ipAddr">IpAddr</a></code> | <code>*string</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | The private virtual network identifier for the target. |

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.ipAddr"></a>

```go
IpAddr *string
```

- *Type:* *string

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#ip_addr DataCloudflareInfrastructureAccessTargets#ip_addr}

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

datacloudflareinfrastructureaccesstargets.NewDataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddrInput">IpAddrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddr">IpAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddrInput`<sup>Optional</sup> <a name="IpAddrInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddrInput"></a>

```go
func IpAddrInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddr"></a>

```go
func IpAddr() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

datacloudflareinfrastructureaccesstargets.NewDataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddrInput">IpAddrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddr">IpAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddrInput`<sup>Optional</sup> <a name="IpAddrInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddrInput"></a>

```go
func IpAddrInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddr"></a>

```go
func IpAddr() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

datacloudflareinfrastructureaccesstargets.NewDataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4">PutIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6">PutIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv4">ResetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpv4` <a name="PutIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4"></a>

```go
func PutIpv4(value DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>

---

##### `PutIpv6` <a name="PutIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6"></a>

```go
func PutIpv6(value DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>

---

##### `ResetIpv4` <a name="ResetIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv4"></a>

```go
func ResetIpv4()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv6"></a>

```go
func ResetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4Input">Ipv4Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4"></a>

```go
func Ipv4() DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6"></a>

```go
func Ipv6() DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference</a>

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4Input"></a>

```go
func Ipv4Input() interface{}
```

- *Type:* interface{}

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6Input"></a>

```go
func Ipv6Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareInfrastructureAccessTargetsTargetsIp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

---


### DataCloudflareInfrastructureAccessTargetsTargetsList <a name="DataCloudflareInfrastructureAccessTargetsTargetsList" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

datacloudflareinfrastructureaccesstargets.NewDataCloudflareInfrastructureAccessTargetsTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareInfrastructureAccessTargetsTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.get"></a>

```go
func Get(index *f64) DataCloudflareInfrastructureAccessTargetsTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareInfrastructureAccessTargetsTargetsOutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/datacloudflareinfrastructureaccesstargets"

datacloudflareinfrastructureaccesstargets.NewDataCloudflareInfrastructureAccessTargetsTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareInfrastructureAccessTargetsTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp">PutIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIp` <a name="PutIp" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp"></a>

```go
func PutIp(value DataCloudflareInfrastructureAccessTargetsTargetsIp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ip">Ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ipInput">IpInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ip"></a>

```go
func Ip() DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ipInput"></a>

```go
func IpInput() DataCloudflareInfrastructureAccessTargetsTargetsIp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareInfrastructureAccessTargetsTargets
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a>

---



