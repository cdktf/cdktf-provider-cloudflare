# `dataCloudflareApiShieldDiscoveryOperations` Submodule <a name="`dataCloudflareApiShieldDiscoveryOperations` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareApiShieldDiscoveryOperations <a name="DataCloudflareApiShieldDiscoveryOperations" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/api_shield_discovery_operations cloudflare_api_shield_discovery_operations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

datacloudflareapishielddiscoveryoperations.NewDataCloudflareApiShieldDiscoveryOperations(scope Construct, id *string, config DataCloudflareApiShieldDiscoveryOperationsConfig) DataCloudflareApiShieldDiscoveryOperations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig">DataCloudflareApiShieldDiscoveryOperationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig">DataCloudflareApiShieldDiscoveryOperationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDiff">ResetDiff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDiff` <a name="ResetDiff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDiff"></a>

```go
func ResetDiff()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetHost"></a>

```go
func ResetHost()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrigin"></a>

```go
func ResetOrigin()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareApiShieldDiscoveryOperations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

datacloudflareapishielddiscoveryoperations.DataCloudflareApiShieldDiscoveryOperations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

datacloudflareapishielddiscoveryoperations.DataCloudflareApiShieldDiscoveryOperations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

datacloudflareapishielddiscoveryoperations.DataCloudflareApiShieldDiscoveryOperations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

datacloudflareapishielddiscoveryoperations.DataCloudflareApiShieldDiscoveryOperations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareApiShieldDiscoveryOperations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareApiShieldDiscoveryOperations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareApiShieldDiscoveryOperations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/api_shield_discovery_operations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareApiShieldDiscoveryOperations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList">DataCloudflareApiShieldDiscoveryOperationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diffInput">DiffInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.hostInput">HostInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.methodInput">MethodInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.originInput">OriginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diff">Diff</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.host">Host</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.method">Method</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.result"></a>

```go
func Result() DataCloudflareApiShieldDiscoveryOperationsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList">DataCloudflareApiShieldDiscoveryOperationsResultList</a>

---

##### `DiffInput`<sup>Optional</sup> <a name="DiffInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diffInput"></a>

```go
func DiffInput() interface{}
```

- *Type:* interface{}

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.hostInput"></a>

```go
func HostInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.methodInput"></a>

```go
func MethodInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.originInput"></a>

```go
func OriginInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Diff`<sup>Required</sup> <a name="Diff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diff"></a>

```go
func Diff() interface{}
```

- *Type:* interface{}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.host"></a>

```go
func Host() *[]*string
```

- *Type:* *[]*string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.method"></a>

```go
func Method() *[]*string
```

- *Type:* *[]*string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareApiShieldDiscoveryOperationsConfig <a name="DataCloudflareApiShieldDiscoveryOperationsConfig" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

&datacloudflareapishielddiscoveryoperations.DataCloudflareApiShieldDiscoveryOperationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	Diff: interface{},
	Direction: *string,
	Endpoint: *string,
	Host: *[]*string,
	MaxItems: *f64,
	Method: *[]*string,
	Order: *string,
	Origin: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.diff">Diff</a></code> | <code>interface{}</code> | When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.direction">Direction</a></code> | <code>*string</code> | Direction to order results. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Filter results to only include endpoints containing this pattern. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.host">Host</a></code> | <code>*[]*string</code> | Filter results to only include the specified hosts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.method">Method</a></code> | <code>*[]*string</code> | Filter results to only include the specified HTTP methods. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.order">Order</a></code> | <code>*string</code> | Field to order by Available values: "host", "method", "endpoint", "traffic_stats.requests", "traffic_stats.last_updated". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.origin">Origin</a></code> | <code>*string</code> | Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery Available values: "ML", "SessionIdentifier", "LabelDiscovery". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.state">State</a></code> | <code>*string</code> | Filter results to only include discovery results in a particular state. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/api_shield_discovery_operations#zone_id DataCloudflareApiShieldDiscoveryOperations#zone_id}

---

##### `Diff`<sup>Optional</sup> <a name="Diff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.diff"></a>

```go
Diff interface{}
```

- *Type:* interface{}

When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/api_shield_discovery_operations#diff DataCloudflareApiShieldDiscoveryOperations#diff}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction to order results. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/api_shield_discovery_operations#direction DataCloudflareApiShieldDiscoveryOperations#direction}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Filter results to only include endpoints containing this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/api_shield_discovery_operations#endpoint DataCloudflareApiShieldDiscoveryOperations#endpoint}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.host"></a>

```go
Host *[]*string
```

- *Type:* *[]*string

Filter results to only include the specified hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/api_shield_discovery_operations#host DataCloudflareApiShieldDiscoveryOperations#host}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/api_shield_discovery_operations#max_items DataCloudflareApiShieldDiscoveryOperations#max_items}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.method"></a>

```go
Method *[]*string
```

- *Type:* *[]*string

Filter results to only include the specified HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/api_shield_discovery_operations#method DataCloudflareApiShieldDiscoveryOperations#method}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order by Available values: "host", "method", "endpoint", "traffic_stats.requests", "traffic_stats.last_updated".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/api_shield_discovery_operations#order DataCloudflareApiShieldDiscoveryOperations#order}

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.origin"></a>

```go
Origin *string
```

- *Type:* *string

Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery Available values: "ML", "SessionIdentifier", "LabelDiscovery".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/api_shield_discovery_operations#origin DataCloudflareApiShieldDiscoveryOperations#origin}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Filter results to only include discovery results in a particular state.

States are as follows

* `review` - Discovered operations that are not saved into API Shield Endpoint Management
* `saved` - Discovered operations that are already saved into API Shield Endpoint Management
* `ignored` - Discovered operations that have been marked as ignored
  Available values: "review", "saved", "ignored".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/api_shield_discovery_operations#state DataCloudflareApiShieldDiscoveryOperations#state}

---

### DataCloudflareApiShieldDiscoveryOperationsResult <a name="DataCloudflareApiShieldDiscoveryOperationsResult" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

&datacloudflareapishielddiscoveryoperations.DataCloudflareApiShieldDiscoveryOperationsResult {

}
```


### DataCloudflareApiShieldDiscoveryOperationsResultFeatures <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeatures" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

&datacloudflareapishielddiscoveryoperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures {

}
```


### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

&datacloudflareapishielddiscoveryoperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

datacloudflareapishielddiscoveryoperations.NewDataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.trafficStats">TrafficStats</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures">DataCloudflareApiShieldDiscoveryOperationsResultFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrafficStats`<sup>Required</sup> <a name="TrafficStats" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.trafficStats"></a>

```go
func TrafficStats() DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldDiscoveryOperationsResultFeatures
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures">DataCloudflareApiShieldDiscoveryOperationsResultFeatures</a>

---


### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

datacloudflareapishielddiscoveryoperations.NewDataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.requests">Requests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.requests"></a>

```go
func Requests() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats</a>

---


### DataCloudflareApiShieldDiscoveryOperationsResultList <a name="DataCloudflareApiShieldDiscoveryOperationsResultList" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

datacloudflareapishielddiscoveryoperations.NewDataCloudflareApiShieldDiscoveryOperationsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareApiShieldDiscoveryOperationsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareApiShieldDiscoveryOperationsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareApiShieldDiscoveryOperationsResultOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareapishielddiscoveryoperations"

datacloudflareapishielddiscoveryoperations.NewDataCloudflareApiShieldDiscoveryOperationsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareApiShieldDiscoveryOperationsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.features">Features</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.origin">Origin</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult">DataCloudflareApiShieldDiscoveryOperationsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.features"></a>

```go
func Features() DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.origin"></a>

```go
func Origin() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldDiscoveryOperationsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult">DataCloudflareApiShieldDiscoveryOperationsResult</a>

---



