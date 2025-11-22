# `dataCloudflareZeroTrustAccessInfrastructureTarget` Submodule <a name="`dataCloudflareZeroTrustAccessInfrastructureTarget` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessInfrastructureTarget <a name="DataCloudflareZeroTrustAccessInfrastructureTarget" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

datacloudflarezerotrustaccessinfrastructuretarget.NewDataCloudflareZeroTrustAccessInfrastructureTarget(scope Construct, id *string, config DataCloudflareZeroTrustAccessInfrastructureTargetConfig) DataCloudflareZeroTrustAccessInfrastructureTarget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig">DataCloudflareZeroTrustAccessInfrastructureTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig">DataCloudflareZeroTrustAccessInfrastructureTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.putFilter"></a>

```go
func PutFilter(value DataCloudflareZeroTrustAccessInfrastructureTargetFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter">DataCloudflareZeroTrustAccessInfrastructureTargetFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetTargetId` <a name="ResetTargetId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.resetTargetId"></a>

```go
func ResetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

datacloudflarezerotrustaccessinfrastructuretarget.DataCloudflareZeroTrustAccessInfrastructureTarget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

datacloudflarezerotrustaccessinfrastructuretarget.DataCloudflareZeroTrustAccessInfrastructureTarget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

datacloudflarezerotrustaccessinfrastructuretarget.DataCloudflareZeroTrustAccessInfrastructureTarget_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

datacloudflarezerotrustaccessinfrastructuretarget.DataCloudflareZeroTrustAccessInfrastructureTarget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustAccessInfrastructureTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustAccessInfrastructureTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessInfrastructureTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.ip">Ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.filter"></a>

```go
func Filter() DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.ip"></a>

```go
func Ip() DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTarget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessInfrastructureTargetConfig <a name="DataCloudflareZeroTrustAccessInfrastructureTargetConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

&datacloudflarezerotrustaccessinfrastructuretarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter,
	TargetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter">DataCloudflareZeroTrustAccessInfrastructureTargetFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#filter DataCloudflareZeroTrustAccessInfrastructureTarget#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Target identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#account_id DataCloudflareZeroTrustAccessInfrastructureTarget#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.filter"></a>

```go
Filter DataCloudflareZeroTrustAccessInfrastructureTargetFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter">DataCloudflareZeroTrustAccessInfrastructureTargetFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#filter DataCloudflareZeroTrustAccessInfrastructureTarget#filter}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Target identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#target_id DataCloudflareZeroTrustAccessInfrastructureTarget#target_id}

---

### DataCloudflareZeroTrustAccessInfrastructureTargetFilter <a name="DataCloudflareZeroTrustAccessInfrastructureTargetFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

&datacloudflarezerotrustaccessinfrastructuretarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter {
	CreatedAfter: *string,
	CreatedBefore: *string,
	Direction: *string,
	Hostname: *string,
	HostnameContains: *string,
	IpLike: *string,
	Ips: *[]*string,
	IpV4: *string,
	Ipv4End: *string,
	Ipv4Start: *string,
	IpV6: *string,
	Ipv6End: *string,
	Ipv6Start: *string,
	ModifiedAfter: *string,
	ModifiedBefore: *string,
	Order: *string,
	TargetIds: *[]*string,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.createdAfter">CreatedAfter</a></code> | <code>*string</code> | Date and time at which the target was created after (inclusive). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.createdBefore">CreatedBefore</a></code> | <code>*string</code> | Date and time at which the target was created before (inclusive). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.direction">Direction</a></code> | <code>*string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname of a target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.hostnameContains">HostnameContains</a></code> | <code>*string</code> | Partial match to the hostname of a target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipLike">IpLike</a></code> | <code>*string</code> | Filters for targets whose IP addresses look like the specified string. Supports `*` as a wildcard character. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ips">Ips</a></code> | <code>*[]*string</code> | Filters for targets that have any of the following IP addresses. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipV4">IpV4</a></code> | <code>*string</code> | IPv4 address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipv4End">Ipv4End</a></code> | <code>*string</code> | Defines an IPv4 filter range's ending value (inclusive). Requires `ipv4_start` to be specified as well. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipv4Start">Ipv4Start</a></code> | <code>*string</code> | Defines an IPv4 filter range's starting value (inclusive). Requires `ipv4_end` to be specified as well. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipV6">IpV6</a></code> | <code>*string</code> | IPv6 address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipv6End">Ipv6End</a></code> | <code>*string</code> | Defines an IPv6 filter range's ending value (inclusive). Requires `ipv6_start` to be specified as well. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipv6Start">Ipv6Start</a></code> | <code>*string</code> | Defines an IPv6 filter range's starting value (inclusive). Requires `ipv6_end` to be specified as well. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.modifiedAfter">ModifiedAfter</a></code> | <code>*string</code> | Date and time at which the target was modified after (inclusive). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.modifiedBefore">ModifiedBefore</a></code> | <code>*string</code> | Date and time at which the target was modified before (inclusive). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.order">Order</a></code> | <code>*string</code> | The field to sort by. Available values: "hostname", "created_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.targetIds">TargetIds</a></code> | <code>*[]*string</code> | Filters for targets that have any of the following UUIDs. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | Private virtual network identifier of the target. |

---

##### `CreatedAfter`<sup>Optional</sup> <a name="CreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.createdAfter"></a>

```go
CreatedAfter *string
```

- *Type:* *string

Date and time at which the target was created after (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#created_after DataCloudflareZeroTrustAccessInfrastructureTarget#created_after}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.createdBefore"></a>

```go
CreatedBefore *string
```

- *Type:* *string

Date and time at which the target was created before (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#created_before DataCloudflareZeroTrustAccessInfrastructureTarget#created_before}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#direction DataCloudflareZeroTrustAccessInfrastructureTarget#direction}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname of a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#hostname DataCloudflareZeroTrustAccessInfrastructureTarget#hostname}

---

##### `HostnameContains`<sup>Optional</sup> <a name="HostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.hostnameContains"></a>

```go
HostnameContains *string
```

- *Type:* *string

Partial match to the hostname of a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#hostname_contains DataCloudflareZeroTrustAccessInfrastructureTarget#hostname_contains}

---

##### `IpLike`<sup>Optional</sup> <a name="IpLike" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipLike"></a>

```go
IpLike *string
```

- *Type:* *string

Filters for targets whose IP addresses look like the specified string. Supports `*` as a wildcard character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#ip_like DataCloudflareZeroTrustAccessInfrastructureTarget#ip_like}

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ips"></a>

```go
Ips *[]*string
```

- *Type:* *[]*string

Filters for targets that have any of the following IP addresses.

Specify
`ips` multiple times in query parameter to build list of candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#ips DataCloudflareZeroTrustAccessInfrastructureTarget#ips}

---

##### `IpV4`<sup>Optional</sup> <a name="IpV4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipV4"></a>

```go
IpV4 *string
```

- *Type:* *string

IPv4 address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#ip_v4 DataCloudflareZeroTrustAccessInfrastructureTarget#ip_v4}

---

##### `Ipv4End`<sup>Optional</sup> <a name="Ipv4End" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipv4End"></a>

```go
Ipv4End *string
```

- *Type:* *string

Defines an IPv4 filter range's ending value (inclusive). Requires `ipv4_start` to be specified as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#ipv4_end DataCloudflareZeroTrustAccessInfrastructureTarget#ipv4_end}

---

##### `Ipv4Start`<sup>Optional</sup> <a name="Ipv4Start" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipv4Start"></a>

```go
Ipv4Start *string
```

- *Type:* *string

Defines an IPv4 filter range's starting value (inclusive). Requires `ipv4_end` to be specified as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#ipv4_start DataCloudflareZeroTrustAccessInfrastructureTarget#ipv4_start}

---

##### `IpV6`<sup>Optional</sup> <a name="IpV6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipV6"></a>

```go
IpV6 *string
```

- *Type:* *string

IPv6 address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#ip_v6 DataCloudflareZeroTrustAccessInfrastructureTarget#ip_v6}

---

##### `Ipv6End`<sup>Optional</sup> <a name="Ipv6End" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipv6End"></a>

```go
Ipv6End *string
```

- *Type:* *string

Defines an IPv6 filter range's ending value (inclusive). Requires `ipv6_start` to be specified as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#ipv6_end DataCloudflareZeroTrustAccessInfrastructureTarget#ipv6_end}

---

##### `Ipv6Start`<sup>Optional</sup> <a name="Ipv6Start" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.ipv6Start"></a>

```go
Ipv6Start *string
```

- *Type:* *string

Defines an IPv6 filter range's starting value (inclusive). Requires `ipv6_end` to be specified as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#ipv6_start DataCloudflareZeroTrustAccessInfrastructureTarget#ipv6_start}

---

##### `ModifiedAfter`<sup>Optional</sup> <a name="ModifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.modifiedAfter"></a>

```go
ModifiedAfter *string
```

- *Type:* *string

Date and time at which the target was modified after (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#modified_after DataCloudflareZeroTrustAccessInfrastructureTarget#modified_after}

---

##### `ModifiedBefore`<sup>Optional</sup> <a name="ModifiedBefore" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.modifiedBefore"></a>

```go
ModifiedBefore *string
```

- *Type:* *string

Date and time at which the target was modified before (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#modified_before DataCloudflareZeroTrustAccessInfrastructureTarget#modified_before}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.order"></a>

```go
Order *string
```

- *Type:* *string

The field to sort by. Available values: "hostname", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#order DataCloudflareZeroTrustAccessInfrastructureTarget#order}

---

##### `TargetIds`<sup>Optional</sup> <a name="TargetIds" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.targetIds"></a>

```go
TargetIds *[]*string
```

- *Type:* *[]*string

Filters for targets that have any of the following UUIDs.

Specify
`target_ids` multiple times in query parameter to build list of
candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#target_ids DataCloudflareZeroTrustAccessInfrastructureTarget#target_ids}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilter.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

Private virtual network identifier of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_access_infrastructure_target#virtual_network_id DataCloudflareZeroTrustAccessInfrastructureTarget#virtual_network_id}

---

### DataCloudflareZeroTrustAccessInfrastructureTargetIp <a name="DataCloudflareZeroTrustAccessInfrastructureTargetIp" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

&datacloudflarezerotrustaccessinfrastructuretarget.DataCloudflareZeroTrustAccessInfrastructureTargetIp {

}
```


### DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4 <a name="DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

&datacloudflarezerotrustaccessinfrastructuretarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4 {

}
```


### DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6 <a name="DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

&datacloudflarezerotrustaccessinfrastructuretarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6 {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference <a name="DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

datacloudflarezerotrustaccessinfrastructuretarget.NewDataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetCreatedAfter">ResetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetCreatedBefore">ResetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetHostnameContains">ResetHostnameContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpLike">ResetIpLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpV4">ResetIpV4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpv4End">ResetIpv4End</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpv4Start">ResetIpv4Start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpV6">ResetIpV6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpv6End">ResetIpv6End</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpv6Start">ResetIpv6Start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetModifiedAfter">ResetModifiedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetModifiedBefore">ResetModifiedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetTargetIds">ResetTargetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreatedAfter` <a name="ResetCreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetCreatedAfter"></a>

```go
func ResetCreatedAfter()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetCreatedBefore"></a>

```go
func ResetCreatedBefore()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetHostnameContains` <a name="ResetHostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetHostnameContains"></a>

```go
func ResetHostnameContains()
```

##### `ResetIpLike` <a name="ResetIpLike" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpLike"></a>

```go
func ResetIpLike()
```

##### `ResetIps` <a name="ResetIps" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIps"></a>

```go
func ResetIps()
```

##### `ResetIpV4` <a name="ResetIpV4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpV4"></a>

```go
func ResetIpV4()
```

##### `ResetIpv4End` <a name="ResetIpv4End" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpv4End"></a>

```go
func ResetIpv4End()
```

##### `ResetIpv4Start` <a name="ResetIpv4Start" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpv4Start"></a>

```go
func ResetIpv4Start()
```

##### `ResetIpV6` <a name="ResetIpV6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpV6"></a>

```go
func ResetIpV6()
```

##### `ResetIpv6End` <a name="ResetIpv6End" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpv6End"></a>

```go
func ResetIpv6End()
```

##### `ResetIpv6Start` <a name="ResetIpv6Start" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetIpv6Start"></a>

```go
func ResetIpv6Start()
```

##### `ResetModifiedAfter` <a name="ResetModifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetModifiedAfter"></a>

```go
func ResetModifiedAfter()
```

##### `ResetModifiedBefore` <a name="ResetModifiedBefore" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetModifiedBefore"></a>

```go
func ResetModifiedBefore()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetTargetIds` <a name="ResetTargetIds" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetTargetIds"></a>

```go
func ResetTargetIds()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.createdAfterInput">CreatedAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.hostnameContainsInput">HostnameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipLikeInput">IpLikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipsInput">IpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv4EndInput">Ipv4EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipV4Input">IpV4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv4StartInput">Ipv4StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv6EndInput">Ipv6EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipV6Input">IpV6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv6StartInput">Ipv6StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.modifiedAfterInput">ModifiedAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.modifiedBeforeInput">ModifiedBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.targetIdsInput">TargetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.createdAfter">CreatedAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.createdBefore">CreatedBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.hostnameContains">HostnameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipLike">IpLike</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipV4">IpV4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv4End">Ipv4End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv4Start">Ipv4Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipV6">IpV6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv6End">Ipv6End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv6Start">Ipv6Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.modifiedAfter">ModifiedAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.modifiedBefore">ModifiedBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.targetIds">TargetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAfterInput`<sup>Optional</sup> <a name="CreatedAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.createdAfterInput"></a>

```go
func CreatedAfterInput() *string
```

- *Type:* *string

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.createdBeforeInput"></a>

```go
func CreatedBeforeInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `HostnameContainsInput`<sup>Optional</sup> <a name="HostnameContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.hostnameContainsInput"></a>

```go
func HostnameContainsInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IpLikeInput`<sup>Optional</sup> <a name="IpLikeInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipLikeInput"></a>

```go
func IpLikeInput() *string
```

- *Type:* *string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipsInput"></a>

```go
func IpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4EndInput`<sup>Optional</sup> <a name="Ipv4EndInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv4EndInput"></a>

```go
func Ipv4EndInput() *string
```

- *Type:* *string

---

##### `IpV4Input`<sup>Optional</sup> <a name="IpV4Input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipV4Input"></a>

```go
func IpV4Input() *string
```

- *Type:* *string

---

##### `Ipv4StartInput`<sup>Optional</sup> <a name="Ipv4StartInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv4StartInput"></a>

```go
func Ipv4StartInput() *string
```

- *Type:* *string

---

##### `Ipv6EndInput`<sup>Optional</sup> <a name="Ipv6EndInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv6EndInput"></a>

```go
func Ipv6EndInput() *string
```

- *Type:* *string

---

##### `IpV6Input`<sup>Optional</sup> <a name="IpV6Input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipV6Input"></a>

```go
func IpV6Input() *string
```

- *Type:* *string

---

##### `Ipv6StartInput`<sup>Optional</sup> <a name="Ipv6StartInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv6StartInput"></a>

```go
func Ipv6StartInput() *string
```

- *Type:* *string

---

##### `ModifiedAfterInput`<sup>Optional</sup> <a name="ModifiedAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.modifiedAfterInput"></a>

```go
func ModifiedAfterInput() *string
```

- *Type:* *string

---

##### `ModifiedBeforeInput`<sup>Optional</sup> <a name="ModifiedBeforeInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.modifiedBeforeInput"></a>

```go
func ModifiedBeforeInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `TargetIdsInput`<sup>Optional</sup> <a name="TargetIdsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.targetIdsInput"></a>

```go
func TargetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `CreatedAfter`<sup>Required</sup> <a name="CreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.createdAfter"></a>

```go
func CreatedAfter() *string
```

- *Type:* *string

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.createdBefore"></a>

```go
func CreatedBefore() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `HostnameContains`<sup>Required</sup> <a name="HostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.hostnameContains"></a>

```go
func HostnameContains() *string
```

- *Type:* *string

---

##### `IpLike`<sup>Required</sup> <a name="IpLike" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipLike"></a>

```go
func IpLike() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `IpV4`<sup>Required</sup> <a name="IpV4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipV4"></a>

```go
func IpV4() *string
```

- *Type:* *string

---

##### `Ipv4End`<sup>Required</sup> <a name="Ipv4End" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv4End"></a>

```go
func Ipv4End() *string
```

- *Type:* *string

---

##### `Ipv4Start`<sup>Required</sup> <a name="Ipv4Start" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv4Start"></a>

```go
func Ipv4Start() *string
```

- *Type:* *string

---

##### `IpV6`<sup>Required</sup> <a name="IpV6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipV6"></a>

```go
func IpV6() *string
```

- *Type:* *string

---

##### `Ipv6End`<sup>Required</sup> <a name="Ipv6End" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv6End"></a>

```go
func Ipv6End() *string
```

- *Type:* *string

---

##### `Ipv6Start`<sup>Required</sup> <a name="Ipv6Start" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.ipv6Start"></a>

```go
func Ipv6Start() *string
```

- *Type:* *string

---

##### `ModifiedAfter`<sup>Required</sup> <a name="ModifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.modifiedAfter"></a>

```go
func ModifiedAfter() *string
```

- *Type:* *string

---

##### `ModifiedBefore`<sup>Required</sup> <a name="ModifiedBefore" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.modifiedBefore"></a>

```go
func ModifiedBefore() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.targetIds"></a>

```go
func TargetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference <a name="DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

datacloudflarezerotrustaccessinfrastructuretarget.NewDataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddr">IpAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4">DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddr"></a>

```go
func IpAddr() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4">DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4</a>

---


### DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference <a name="DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

datacloudflarezerotrustaccessinfrastructuretarget.NewDataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddr">IpAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6">DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddr"></a>

```go
func IpAddr() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6">DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6</a>

---


### DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference <a name="DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustaccessinfrastructuretarget"

datacloudflarezerotrustaccessinfrastructuretarget.NewDataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIp">DataCloudflareZeroTrustAccessInfrastructureTargetIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4"></a>

```go
func Ipv4() DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6"></a>

```go
func Ipv6() DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessInfrastructureTargetIp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTarget.DataCloudflareZeroTrustAccessInfrastructureTargetIp">DataCloudflareZeroTrustAccessInfrastructureTargetIp</a>

---



