# `dataCloudflareZeroTrustDevicePostureRule` Submodule <a name="`dataCloudflareZeroTrustDevicePostureRule` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDevicePostureRule <a name="DataCloudflareZeroTrustDevicePostureRule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

datacloudflarezerotrustdeviceposturerule.NewDataCloudflareZeroTrustDevicePostureRule(scope Construct, id *string, config DataCloudflareZeroTrustDevicePostureRuleConfig) DataCloudflareZeroTrustDevicePostureRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig">DataCloudflareZeroTrustDevicePostureRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig">DataCloudflareZeroTrustDevicePostureRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.resetRuleId">ResetRuleId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.resetRuleId"></a>

```go
func ResetRuleId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

datacloudflarezerotrustdeviceposturerule.DataCloudflareZeroTrustDevicePostureRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

datacloudflarezerotrustdeviceposturerule.DataCloudflareZeroTrustDevicePostureRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

datacloudflarezerotrustdeviceposturerule.DataCloudflareZeroTrustDevicePostureRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

datacloudflarezerotrustdeviceposturerule.DataCloudflareZeroTrustDevicePostureRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustDevicePostureRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_device_posture_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.expiration">Expiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.input">Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference">DataCloudflareZeroTrustDevicePostureRuleInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList">DataCloudflareZeroTrustDevicePostureRuleMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.ruleIdInput">RuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.expiration"></a>

```go
func Expiration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.input"></a>

```go
func Input() DataCloudflareZeroTrustDevicePostureRuleInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference">DataCloudflareZeroTrustDevicePostureRuleInputOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.match"></a>

```go
func Match() DataCloudflareZeroTrustDevicePostureRuleMatchList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList">DataCloudflareZeroTrustDevicePostureRuleMatchList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.ruleIdInput"></a>

```go
func RuleIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDevicePostureRuleConfig <a name="DataCloudflareZeroTrustDevicePostureRuleConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

&datacloudflarezerotrustdeviceposturerule.DataCloudflareZeroTrustDevicePostureRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	RuleId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_device_posture_rule#account_id DataCloudflareZeroTrustDevicePostureRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.ruleId">RuleId</a></code> | <code>*string</code> | API UUID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_device_posture_rule#account_id DataCloudflareZeroTrustDevicePostureRule#account_id}.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.ruleId"></a>

```go
RuleId *string
```

- *Type:* *string

API UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_device_posture_rule#rule_id DataCloudflareZeroTrustDevicePostureRule#rule_id}

---

### DataCloudflareZeroTrustDevicePostureRuleInput <a name="DataCloudflareZeroTrustDevicePostureRuleInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

&datacloudflarezerotrustdeviceposturerule.DataCloudflareZeroTrustDevicePostureRuleInput {

}
```


### DataCloudflareZeroTrustDevicePostureRuleInputLocations <a name="DataCloudflareZeroTrustDevicePostureRuleInputLocations" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

&datacloudflarezerotrustdeviceposturerule.DataCloudflareZeroTrustDevicePostureRuleInputLocations {

}
```


### DataCloudflareZeroTrustDevicePostureRuleMatch <a name="DataCloudflareZeroTrustDevicePostureRuleMatch" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

&datacloudflarezerotrustdeviceposturerule.DataCloudflareZeroTrustDevicePostureRuleMatch {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference <a name="DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

datacloudflarezerotrustdeviceposturerule.NewDataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStores">TrustStores</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations">DataCloudflareZeroTrustDevicePostureRuleInputLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `TrustStores`<sup>Required</sup> <a name="TrustStores" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStores"></a>

```go
func TrustStores() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDevicePostureRuleInputLocations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations">DataCloudflareZeroTrustDevicePostureRuleInputLocations</a>

---


### DataCloudflareZeroTrustDevicePostureRuleInputOutputReference <a name="DataCloudflareZeroTrustDevicePostureRuleInputOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

datacloudflarezerotrustdeviceposturerule.NewDataCloudflareZeroTrustDevicePostureRuleInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDevicePostureRuleInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.activeThreats">ActiveThreats</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.checkDisks">CheckDisks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKey">CheckPrivateKey</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.cn">Cn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatus">ComplianceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.countOperator">CountOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeen">EidLastSeen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.exists">Exists</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.infected">Infected</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.isActive">IsActive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.issueCount">IssueCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.lastSeen">LastSeen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference">DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.networkStatus">NetworkStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operationalState">OperationalState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.os">Os</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osDistroName">OsDistroName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevision">OsDistroRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtra">OsVersionExtra</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.overall">Overall</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.requireAll">RequireAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.score">Score</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.scoreOperator">ScoreOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfig">SensorConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.totalScore">TotalScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.versionOperator">VersionOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput">DataCloudflareZeroTrustDevicePostureRuleInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveThreats`<sup>Required</sup> <a name="ActiveThreats" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.activeThreats"></a>

```go
func ActiveThreats() *f64
```

- *Type:* *f64

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `CheckDisks`<sup>Required</sup> <a name="CheckDisks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.checkDisks"></a>

```go
func CheckDisks() *[]*string
```

- *Type:* *[]*string

---

##### `CheckPrivateKey`<sup>Required</sup> <a name="CheckPrivateKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKey"></a>

```go
func CheckPrivateKey() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Cn`<sup>Required</sup> <a name="Cn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.cn"></a>

```go
func Cn() *string
```

- *Type:* *string

---

##### `ComplianceStatus`<sup>Required</sup> <a name="ComplianceStatus" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatus"></a>

```go
func ComplianceStatus() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `CountOperator`<sup>Required</sup> <a name="CountOperator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.countOperator"></a>

```go
func CountOperator() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `EidLastSeen`<sup>Required</sup> <a name="EidLastSeen" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeen"></a>

```go
func EidLastSeen() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Exists`<sup>Required</sup> <a name="Exists" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.exists"></a>

```go
func Exists() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsage"></a>

```go
func ExtendedKeyUsage() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Infected`<sup>Required</sup> <a name="Infected" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.infected"></a>

```go
func Infected() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.isActive"></a>

```go
func IsActive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IssueCount`<sup>Required</sup> <a name="IssueCount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.issueCount"></a>

```go
func IssueCount() *string
```

- *Type:* *string

---

##### `LastSeen`<sup>Required</sup> <a name="LastSeen" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.lastSeen"></a>

```go
func LastSeen() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.locations"></a>

```go
func Locations() DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference">DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference</a>

---

##### `NetworkStatus`<sup>Required</sup> <a name="NetworkStatus" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.networkStatus"></a>

```go
func NetworkStatus() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `OperationalState`<sup>Required</sup> <a name="OperationalState" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operationalState"></a>

```go
func OperationalState() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.os"></a>

```go
func Os() *string
```

- *Type:* *string

---

##### `OsDistroName`<sup>Required</sup> <a name="OsDistroName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osDistroName"></a>

```go
func OsDistroName() *string
```

- *Type:* *string

---

##### `OsDistroRevision`<sup>Required</sup> <a name="OsDistroRevision" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevision"></a>

```go
func OsDistroRevision() *string
```

- *Type:* *string

---

##### `OsVersionExtra`<sup>Required</sup> <a name="OsVersionExtra" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtra"></a>

```go
func OsVersionExtra() *string
```

- *Type:* *string

---

##### `Overall`<sup>Required</sup> <a name="Overall" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.overall"></a>

```go
func Overall() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RequireAll`<sup>Required</sup> <a name="RequireAll" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.requireAll"></a>

```go
func RequireAll() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.riskLevel"></a>

```go
func RiskLevel() *string
```

- *Type:* *string

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.score"></a>

```go
func Score() *f64
```

- *Type:* *f64

---

##### `ScoreOperator`<sup>Required</sup> <a name="ScoreOperator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.scoreOperator"></a>

```go
func ScoreOperator() *string
```

- *Type:* *string

---

##### `SensorConfig`<sup>Required</sup> <a name="SensorConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfig"></a>

```go
func SensorConfig() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.subjectAlternativeNames"></a>

```go
func SubjectAlternativeNames() *[]*string
```

- *Type:* *[]*string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `TotalScore`<sup>Required</sup> <a name="TotalScore" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.totalScore"></a>

```go
func TotalScore() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VersionOperator`<sup>Required</sup> <a name="VersionOperator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.versionOperator"></a>

```go
func VersionOperator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDevicePostureRuleInput
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput">DataCloudflareZeroTrustDevicePostureRuleInput</a>

---


### DataCloudflareZeroTrustDevicePostureRuleMatchList <a name="DataCloudflareZeroTrustDevicePostureRuleMatchList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

datacloudflarezerotrustdeviceposturerule.NewDataCloudflareZeroTrustDevicePostureRuleMatchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDevicePostureRuleMatchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference <a name="DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrustdeviceposturerule"

datacloudflarezerotrustdeviceposturerule.NewDataCloudflareZeroTrustDevicePostureRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch">DataCloudflareZeroTrustDevicePostureRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDevicePostureRuleMatch
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch">DataCloudflareZeroTrustDevicePostureRuleMatch</a>

---



