# `dataCloudflareZeroTrustDevicePostureRules` Submodule <a name="`dataCloudflareZeroTrustDevicePostureRules` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDevicePostureRules <a name="DataCloudflareZeroTrustDevicePostureRules" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_posture_rules cloudflare_zero_trust_device_posture_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

datacloudflarezerotrustdeviceposturerules.NewDataCloudflareZeroTrustDevicePostureRules(scope Construct, id *string, config DataCloudflareZeroTrustDevicePostureRulesConfig) DataCloudflareZeroTrustDevicePostureRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig">DataCloudflareZeroTrustDevicePostureRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig">DataCloudflareZeroTrustDevicePostureRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

datacloudflarezerotrustdeviceposturerules.DataCloudflareZeroTrustDevicePostureRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

datacloudflarezerotrustdeviceposturerules.DataCloudflareZeroTrustDevicePostureRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

datacloudflarezerotrustdeviceposturerules.DataCloudflareZeroTrustDevicePostureRules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

datacloudflarezerotrustdeviceposturerules.DataCloudflareZeroTrustDevicePostureRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustDevicePostureRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_posture_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList">DataCloudflareZeroTrustDevicePostureRulesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.result"></a>

```go
func Result() DataCloudflareZeroTrustDevicePostureRulesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList">DataCloudflareZeroTrustDevicePostureRulesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDevicePostureRulesConfig <a name="DataCloudflareZeroTrustDevicePostureRulesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

&datacloudflarezerotrustdeviceposturerules.DataCloudflareZeroTrustDevicePostureRulesConfig {
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_posture_rules#account_id DataCloudflareZeroTrustDevicePostureRules#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_posture_rules#account_id DataCloudflareZeroTrustDevicePostureRules#account_id}.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_posture_rules#max_items DataCloudflareZeroTrustDevicePostureRules#max_items}

---

### DataCloudflareZeroTrustDevicePostureRulesResult <a name="DataCloudflareZeroTrustDevicePostureRulesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

&datacloudflarezerotrustdeviceposturerules.DataCloudflareZeroTrustDevicePostureRulesResult {

}
```


### DataCloudflareZeroTrustDevicePostureRulesResultInput <a name="DataCloudflareZeroTrustDevicePostureRulesResultInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

&datacloudflarezerotrustdeviceposturerules.DataCloudflareZeroTrustDevicePostureRulesResultInput {

}
```


### DataCloudflareZeroTrustDevicePostureRulesResultInputLocations <a name="DataCloudflareZeroTrustDevicePostureRulesResultInputLocations" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

&datacloudflarezerotrustdeviceposturerules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocations {

}
```


### DataCloudflareZeroTrustDevicePostureRulesResultMatch <a name="DataCloudflareZeroTrustDevicePostureRulesResultMatch" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

&datacloudflarezerotrustdeviceposturerules.DataCloudflareZeroTrustDevicePostureRulesResultMatch {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference <a name="DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

datacloudflarezerotrustdeviceposturerules.NewDataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.trustStores">TrustStores</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocations">DataCloudflareZeroTrustDevicePostureRulesResultInputLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `TrustStores`<sup>Required</sup> <a name="TrustStores" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.trustStores"></a>

```go
func TrustStores() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDevicePostureRulesResultInputLocations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocations">DataCloudflareZeroTrustDevicePostureRulesResultInputLocations</a>

---


### DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference <a name="DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

datacloudflarezerotrustdeviceposturerules.NewDataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.activeThreats">ActiveThreats</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.checkDisks">CheckDisks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.checkPrivateKey">CheckPrivateKey</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.cn">Cn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.complianceStatus">ComplianceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.countOperator">CountOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.eidLastSeen">EidLastSeen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.exists">Exists</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.infected">Infected</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.isActive">IsActive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.issueCount">IssueCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.lastSeen">LastSeen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference">DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.networkStatus">NetworkStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.operationalState">OperationalState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.os">Os</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.osDistroName">OsDistroName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.osDistroRevision">OsDistroRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.osVersionExtra">OsVersionExtra</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.overall">Overall</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.requireAll">RequireAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.score">Score</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.scoreOperator">ScoreOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.sensorConfig">SensorConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.totalScore">TotalScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.versionOperator">VersionOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInput">DataCloudflareZeroTrustDevicePostureRulesResultInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveThreats`<sup>Required</sup> <a name="ActiveThreats" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.activeThreats"></a>

```go
func ActiveThreats() *f64
```

- *Type:* *f64

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `CheckDisks`<sup>Required</sup> <a name="CheckDisks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.checkDisks"></a>

```go
func CheckDisks() *[]*string
```

- *Type:* *[]*string

---

##### `CheckPrivateKey`<sup>Required</sup> <a name="CheckPrivateKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.checkPrivateKey"></a>

```go
func CheckPrivateKey() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Cn`<sup>Required</sup> <a name="Cn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.cn"></a>

```go
func Cn() *string
```

- *Type:* *string

---

##### `ComplianceStatus`<sup>Required</sup> <a name="ComplianceStatus" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.complianceStatus"></a>

```go
func ComplianceStatus() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `CountOperator`<sup>Required</sup> <a name="CountOperator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.countOperator"></a>

```go
func CountOperator() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `EidLastSeen`<sup>Required</sup> <a name="EidLastSeen" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.eidLastSeen"></a>

```go
func EidLastSeen() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Exists`<sup>Required</sup> <a name="Exists" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.exists"></a>

```go
func Exists() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.extendedKeyUsage"></a>

```go
func ExtendedKeyUsage() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Infected`<sup>Required</sup> <a name="Infected" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.infected"></a>

```go
func Infected() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.isActive"></a>

```go
func IsActive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IssueCount`<sup>Required</sup> <a name="IssueCount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.issueCount"></a>

```go
func IssueCount() *string
```

- *Type:* *string

---

##### `LastSeen`<sup>Required</sup> <a name="LastSeen" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.lastSeen"></a>

```go
func LastSeen() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.locations"></a>

```go
func Locations() DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference">DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference</a>

---

##### `NetworkStatus`<sup>Required</sup> <a name="NetworkStatus" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.networkStatus"></a>

```go
func NetworkStatus() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `OperationalState`<sup>Required</sup> <a name="OperationalState" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.operationalState"></a>

```go
func OperationalState() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.os"></a>

```go
func Os() *string
```

- *Type:* *string

---

##### `OsDistroName`<sup>Required</sup> <a name="OsDistroName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.osDistroName"></a>

```go
func OsDistroName() *string
```

- *Type:* *string

---

##### `OsDistroRevision`<sup>Required</sup> <a name="OsDistroRevision" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.osDistroRevision"></a>

```go
func OsDistroRevision() *string
```

- *Type:* *string

---

##### `OsVersionExtra`<sup>Required</sup> <a name="OsVersionExtra" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.osVersionExtra"></a>

```go
func OsVersionExtra() *string
```

- *Type:* *string

---

##### `Overall`<sup>Required</sup> <a name="Overall" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.overall"></a>

```go
func Overall() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RequireAll`<sup>Required</sup> <a name="RequireAll" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.requireAll"></a>

```go
func RequireAll() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.riskLevel"></a>

```go
func RiskLevel() *string
```

- *Type:* *string

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.score"></a>

```go
func Score() *f64
```

- *Type:* *f64

---

##### `ScoreOperator`<sup>Required</sup> <a name="ScoreOperator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.scoreOperator"></a>

```go
func ScoreOperator() *string
```

- *Type:* *string

---

##### `SensorConfig`<sup>Required</sup> <a name="SensorConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.sensorConfig"></a>

```go
func SensorConfig() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `TotalScore`<sup>Required</sup> <a name="TotalScore" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.totalScore"></a>

```go
func TotalScore() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VersionOperator`<sup>Required</sup> <a name="VersionOperator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.versionOperator"></a>

```go
func VersionOperator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDevicePostureRulesResultInput
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInput">DataCloudflareZeroTrustDevicePostureRulesResultInput</a>

---


### DataCloudflareZeroTrustDevicePostureRulesResultList <a name="DataCloudflareZeroTrustDevicePostureRulesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

datacloudflarezerotrustdeviceposturerules.NewDataCloudflareZeroTrustDevicePostureRulesResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDevicePostureRulesResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDevicePostureRulesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDevicePostureRulesResultMatchList <a name="DataCloudflareZeroTrustDevicePostureRulesResultMatchList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

datacloudflarezerotrustdeviceposturerules.NewDataCloudflareZeroTrustDevicePostureRulesResultMatchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDevicePostureRulesResultMatchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference <a name="DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

datacloudflarezerotrustdeviceposturerules.NewDataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatch">DataCloudflareZeroTrustDevicePostureRulesResultMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDevicePostureRulesResultMatch
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatch">DataCloudflareZeroTrustDevicePostureRulesResultMatch</a>

---


### DataCloudflareZeroTrustDevicePostureRulesResultOutputReference <a name="DataCloudflareZeroTrustDevicePostureRulesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarezerotrustdeviceposturerules"

datacloudflarezerotrustdeviceposturerules.NewDataCloudflareZeroTrustDevicePostureRulesResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDevicePostureRulesResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.expiration">Expiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.input">Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference">DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList">DataCloudflareZeroTrustDevicePostureRulesResultMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResult">DataCloudflareZeroTrustDevicePostureRulesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.expiration"></a>

```go
func Expiration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.input"></a>

```go
func Input() DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference">DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.match"></a>

```go
func Match() DataCloudflareZeroTrustDevicePostureRulesResultMatchList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList">DataCloudflareZeroTrustDevicePostureRulesResultMatchList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDevicePostureRulesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResult">DataCloudflareZeroTrustDevicePostureRulesResult</a>

---



