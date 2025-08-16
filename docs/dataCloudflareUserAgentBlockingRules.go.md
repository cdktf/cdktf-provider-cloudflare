# `dataCloudflareUserAgentBlockingRules` Submodule <a name="`dataCloudflareUserAgentBlockingRules` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareUserAgentBlockingRules <a name="DataCloudflareUserAgentBlockingRules" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/user_agent_blocking_rules cloudflare_user_agent_blocking_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrules"

datacloudflareuseragentblockingrules.NewDataCloudflareUserAgentBlockingRules(scope Construct, id *string, config DataCloudflareUserAgentBlockingRulesConfig) DataCloudflareUserAgentBlockingRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig">DataCloudflareUserAgentBlockingRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig">DataCloudflareUserAgentBlockingRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetUserAgent">ResetUserAgent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetPaused"></a>

```go
func ResetPaused()
```

##### `ResetUserAgent` <a name="ResetUserAgent" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetUserAgent"></a>

```go
func ResetUserAgent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareUserAgentBlockingRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrules"

datacloudflareuseragentblockingrules.DataCloudflareUserAgentBlockingRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrules"

datacloudflareuseragentblockingrules.DataCloudflareUserAgentBlockingRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrules"

datacloudflareuseragentblockingrules.DataCloudflareUserAgentBlockingRules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrules"

datacloudflareuseragentblockingrules.DataCloudflareUserAgentBlockingRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareUserAgentBlockingRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareUserAgentBlockingRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareUserAgentBlockingRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/user_agent_blocking_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareUserAgentBlockingRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList">DataCloudflareUserAgentBlockingRulesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.pausedInput">PausedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.userAgentInput">UserAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.paused">Paused</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.userAgent">UserAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.result"></a>

```go
func Result() DataCloudflareUserAgentBlockingRulesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList">DataCloudflareUserAgentBlockingRulesResultList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.pausedInput"></a>

```go
func PausedInput() interface{}
```

- *Type:* interface{}

---

##### `UserAgentInput`<sup>Optional</sup> <a name="UserAgentInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.userAgentInput"></a>

```go
func UserAgentInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.paused"></a>

```go
func Paused() interface{}
```

- *Type:* interface{}

---

##### `UserAgent`<sup>Required</sup> <a name="UserAgent" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.userAgent"></a>

```go
func UserAgent() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareUserAgentBlockingRulesConfig <a name="DataCloudflareUserAgentBlockingRulesConfig" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrules"

&datacloudflareuseragentblockingrules.DataCloudflareUserAgentBlockingRulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	Description: *string,
	MaxItems: *f64,
	Paused: interface{},
	UserAgent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.description">Description</a></code> | <code>*string</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.paused">Paused</a></code> | <code>interface{}</code> | When true, indicates that the rule is currently paused. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.userAgent">UserAgent</a></code> | <code>*string</code> | A string to search for in the user agent values of existing rules. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/user_agent_blocking_rules#zone_id DataCloudflareUserAgentBlockingRules#zone_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/user_agent_blocking_rules#description DataCloudflareUserAgentBlockingRules#description}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/user_agent_blocking_rules#max_items DataCloudflareUserAgentBlockingRules#max_items}

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.paused"></a>

```go
Paused interface{}
```

- *Type:* interface{}

When true, indicates that the rule is currently paused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/user_agent_blocking_rules#paused DataCloudflareUserAgentBlockingRules#paused}

---

##### `UserAgent`<sup>Optional</sup> <a name="UserAgent" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.userAgent"></a>

```go
UserAgent *string
```

- *Type:* *string

A string to search for in the user agent values of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/user_agent_blocking_rules#user_agent DataCloudflareUserAgentBlockingRules#user_agent}

---

### DataCloudflareUserAgentBlockingRulesResult <a name="DataCloudflareUserAgentBlockingRulesResult" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrules"

&datacloudflareuseragentblockingrules.DataCloudflareUserAgentBlockingRulesResult {

}
```


### DataCloudflareUserAgentBlockingRulesResultConfiguration <a name="DataCloudflareUserAgentBlockingRulesResultConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrules"

&datacloudflareuseragentblockingrules.DataCloudflareUserAgentBlockingRulesResultConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference <a name="DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrules"

datacloudflareuseragentblockingrules.NewDataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfiguration">DataCloudflareUserAgentBlockingRulesResultConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareUserAgentBlockingRulesResultConfiguration
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfiguration">DataCloudflareUserAgentBlockingRulesResultConfiguration</a>

---


### DataCloudflareUserAgentBlockingRulesResultList <a name="DataCloudflareUserAgentBlockingRulesResultList" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrules"

datacloudflareuseragentblockingrules.NewDataCloudflareUserAgentBlockingRulesResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareUserAgentBlockingRulesResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.get"></a>

```go
func Get(index *f64) DataCloudflareUserAgentBlockingRulesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareUserAgentBlockingRulesResultOutputReference <a name="DataCloudflareUserAgentBlockingRulesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareuseragentblockingrules"

datacloudflareuseragentblockingrules.NewDataCloudflareUserAgentBlockingRulesResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareUserAgentBlockingRulesResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference">DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.paused">Paused</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResult">DataCloudflareUserAgentBlockingRulesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.configuration"></a>

```go
func Configuration() DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference">DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.paused"></a>

```go
func Paused() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareUserAgentBlockingRulesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResult">DataCloudflareUserAgentBlockingRulesResult</a>

---



